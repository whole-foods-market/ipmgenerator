window.on = {}

window.on.submit = {};
window.on.submit.metric = function(event) {
    event.preventDefault();
    var target = event.target;
    var text = target.querySelector('[name="fullname"]');
    var number = target.querySelector('[name="ipm"]');
    var name = text.value;
    var value = number.value;

    if (name.length > 0 && value.length > 0) {

        var people = document.getElementById('people');
        var template = people.querySelector('template');
        var section = template.previousElementSibling;

        var arr = [];
        var rows = section.children;
        if (rows.length > 0) {
            Array.from(rows).forEach(function(k, v) {
                var name = k.firstElementChild.children[0].textContent;
                var value = k.firstElementChild.children[1].textContent;
                arr.push({
                    name,
                    value: parseInt(value)
                });
                //console.log(name, value);
            });
        }
        console.log(38, {
            arr,
            name,
            value
        });
        var arr = arr.filter((i)=>{
            var exist = i.name === name;
            //console.log(40, exist, i.name, name);
            return i.name !== name
        }
        );
        0 > 1 ? console.log(43, {
            arr
        }) : null;
        arr.push({
            name,
            value: parseInt(value)
        });

        console.log(27, {
            rows,
            arr
        });
        section.innerHTML = "";
        arr = arr.length > 1 ? arr.sort((a,b)=>b.value - a.value || a.name.localeCompare(b.name)) : arr;
        console.log(44, {
            rows,
            arr
        });
        arr.forEach(function(entry) {
            var k = entry.name;
            var v = entry.value;
            0 > 1 ? console.log(40, {
                entry
            }, {
                k,
                v
            }) : null;

            var box = template.content.firstElementChild.cloneNode(true);
            box.firstElementChild.children[0].textContent = k;
            box.firstElementChild.children[1].textContent = v;

            section.insertAdjacentHTML('beforeend', box.outerHTML);
        })

        console.log("on.submit.metric", {
            name,
            value,
            people
        });

        text.value = "";
        number.value = "";

    }
}
