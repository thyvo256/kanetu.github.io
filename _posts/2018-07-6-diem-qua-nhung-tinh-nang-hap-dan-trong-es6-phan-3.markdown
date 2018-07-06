---
layout: post
title:  "Điểm qua những tính năng hấp dẫn trong ES6 - Phần 3"
date:   2018-07-6 9:18:40 +0200
img: es6-kanetu.github.io.png
description: Trước tiên để hiểu gõ về tính năng tiếp theo ta cần hiểu gõ Object trong Javacript là gì, nếu ai đã hiểu rồi thì có thể scoll xuống mục 5.
category: Coding
---


## 6.Arrow Function in ES6

Hmm..Tính năng này rất thường xuất hiện trong ReactJS. `arrow` dịch ra là mũi tên, vâng chúng ta sẽ làm việc với mũi tên :).

Thông thường khi tạo một `function` trong Javascript thì ta sử dụng những cách sau: 

{% highlight javascript %}

//cách 1
function nameFunction(var1,var2){
  ...
}

// cách 2
var nameFunction = function(var1, var2){
  ....
}
{% endhighlight %}

Trong ES6 ta tạo đơn giản hơn bằng cách sử dụng mũi tên như sau:

{% highlight javascript %}

var nameFunction = (var1,var2) => { //dosomething...};

var echoName = (name) => { 
  alert(name)
};

echoName("kane"); // nó sẽ alert ra kane

{% endhighlight %}

1. Khi `funciton` chỉ có `một dòng lệnh`, ta có thể viết như thế này cho gọn hơn.

{% highlight javascript %}

var echoName = (name) => alert(name);

echoName("kane") // alert ra kane

{% endhighlight %}

Nghĩa là bạn có thể bỏ đi cặp dấu {}, điều này tuân thủ theo nguyên tắc "nếu bên thân cặp {} chỉ là một câu lệnh thì bạn có thể bỏ cặp {}".

2. Khi `function` chỉ có `một tham tham số`, ta có thể viết ngắn gọn lại là:

{% highlight javascript %}

var echoName = name => {
  alert(name);
}

echoName("kane") // alert ra kane

//Hoặc kết hợp cả tips ở trên thì ta có thể viết luôn như thế này

var echoName1 = name => alert(name);

{% endhighlight %}

3. Khi `function` không có tham số:

{% highlight javascript %}

var sayHello = () => alert("Hello....!");

sayHello(); // alert ra câu Hello....!

{% endhighlight %}

4. Ta Phải chú ý đến ràng buộc mũi tên `=>` nữa nhá:

{% highlight javascript %}

const func1 = (x,y) // sai
=> {
  return x + y;
};

const func2 = (x,y) => // đúng
{
  return x - y;
};

const func3 = (x,y) => {// đúng

  return x * y;
};

const func4 = ( // đúng
x,
y
) => {
  return x / y;
}
{% endhighlight %}

## 7. Destructuring Assignment in ES6

```
Cú pháp <b>Destructuring Assignment</b> là một biểu thức Javascript mà nó có thể giải nén các giá trị từ `array` hoặc thuộc tính từ một `object` vào những biến riêng biệt.
```

{% highlight javascript %}

var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

{% endhighlight %}

Nếu để `...` trước một biến thì khi bị tràn giá trị như ví dụ cuối thì biến `rest` nó sẽ lấy hết phần giá trị bị tràn.

Còn nhiều tips nữa như có thể: swap variable, ignoring some returned values bạn nào muốn tìm hiểu thêm thì vào <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">đây</a>

## 8. Modules in ES6

Nếu bạn nào đang học ReactJS thì sẽ thường sử dụng tính năng này này, lúc ta ta quản lý từng module như một component, mình cũng mới học thôi nên hiểu sao nói vậy.

Trước ES6 JavaScript không hỗ trợ module. Mọi người thường sử dụng AMD, RequireJS, CommonJS và nhiều cái khác. Bây giờ trong ES6 bạn có thể sử dụng các import và export.

Hãy xem ví dụ chúng ta có một biến `port` và phương thức `getAccounts` trong file`module.js` ES5:

{% highlight javascript %}

module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}

{% endhighlight %}

Trong file main.js ES5 chúng ta require('module.js) là dependency:

{% highlight javascript %}

var service = require('module.js')
console.log(service.port) // 3000

{% endhighlight %}

Với ES6 chúng ta import và export như sau, ở file `module.js`:

{% highlight javascript %}

export var port = 3000
export function getAccounts(url) {
  ...
}

{% endhighlight %}

Trong file `main.js`

{% highlight javascript %}

import {port, getAccounts} from 'module'
console.log(port) // 3000

{% endhighlight %}

Hoặc ta muốn import hết những gì đã export trong file `module.js` thì:

{% highlight javascript %}

import * as service from 'module'
console.log(service.port) // 3000

{% endhighlight %}