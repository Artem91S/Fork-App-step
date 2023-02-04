////Проверка поддержки webp добавление класса webp или no- webp to HTML
export function isWebp(){
    //////Проверяем поддержки webp
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        ///////Добавляем класс 
        testWebP(function (support) {
            let className = support === true ? "webp": "no-webp";
            document.documentElement.classList.add(className)
        });
    }