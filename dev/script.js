document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const data = (select) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) { return; }

                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);

                    let val = '';
                    data.cars.forEach(item => {
                        if (item.brand === select) {
                            const {brand, model, price} = item;
                            val = `Тачка ${brand} ${model} <br> Цена: ${price}$`;
                        }
                    });

                    resolve(val);
                } else {
                    const error = 'Произошла ошибка';
                    reject(error);
                }
            });
            request.send();
        })
    };

    select.addEventListener('change',() => {
            data(select.value)
            .then( (data) => output.innerHTML = data )
            .catch( (error) => output.innerHTML = error )
        }
    );

});