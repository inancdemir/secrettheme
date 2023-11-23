document.querySelectorAll('.cart-quantity-selector button').forEach(button => {
    button.addEventListener("click", async () => {
        const input = button.parentElement.querySelector("input");
        const value = Number(input.value);
        const isPlus = button.classList.contains("plus");
        const key = button.closest(".cart-item").getAttribute("data-key");
        if (isPlus) {
            const newValue = value + 1;
            input.value = value + 1;
            
        } else if (value > 1) {
            const newValue = value - 1;
            input.value = value - 1;
            
        }
        const newQuantity = isPlus ? value + 1 : value - 1;
            
            const res = await fetch("/cart/update.js", {
                method : "post",
                headers : {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updates: { [key]: newQuantity } }),
            })
            const json = await res.json();
            //console.log(json);
            const format = document.querySelector('[data-money-format]').getAttribute("data-money-format")
            const totalPrice = formatMoney(json.total_price, format)
            const totalDiscount = formatMoney(json.total_discount, format)
            const item = json.items.find(item => item.key === key)
            const itemPrice = formatMoney(item.final_line_price, format)

            document.querySelector('#total-discount').textContent = totalDiscount
            document.querySelector('#total-price').textContent = totalPrice
            document.querySelector(`[data-key="${key}"] .line-price`).textContent = itemPrice


            console.log({totalPrice ,totalDiscount, itemPrice});
        

    })
})

