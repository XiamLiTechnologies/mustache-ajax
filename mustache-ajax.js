/**
 * mustache-ajax 1.0.0 - https://github.com/XiamLiTechnologies/mustache-ajax
 * Copyright (C) 2018 XiamLi Technologies - XiamLi.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 
if(!window.Mustache) {
    throw 'Mustache needs to be loaded first';
}

const cache = {};

window.Mustache.html = function(id, template, view) {
    let url = 'templates/' + template + '.mustache';
    let element = document.getElementById(id);

    if(element === null) {
        console.error('Tried to render template on non existing element with id ' + id);
        return;
    }

    if(cache.hasOwnProperty(url))
        element.innerHTML = Mustache.render(cache[url], view);
    else {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if(request.status >= 200 && request.status < 400) {
                cache[url] = request.responseText;
                element.innerHTML = Mustache.render(cache[url], view);
            } else
                console.error('Failed to load template ' + template);
        };

        request.onerror = function() {
            console.error('Failed to load template ' + template);
        };

        request.send();
    }
};