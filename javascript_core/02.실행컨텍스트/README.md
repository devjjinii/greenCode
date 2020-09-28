# 02.실행컨텍스트

<br>

## 실행 컨텍스트란?
<br>


>in 이후 a => b => c => d 순으로 이벤트가 실행되고 out 된다.

| 스택방식 | 
|---|
|d|
|c|
|b|
|a|

<br>

>in 이후 a 실행후 b 실행후, c실행후, d가 실행됩니다.

| 큐방식 ||||
|---|:---:|:---:|:---:|
|d|c|b|a|

<br>

>실행 컨텍스트와 콜 스택의 

1. 전역 컨텍스트 실행
2. outer 함수실행
3. inner 함수실행
4. inner 함수완료 소멸
5. outer 함수완료 소멸
6. 전역 컨텍스트 소멸

```
var a = 1;
function outer(){
    function inner(){
        console.log('inner',a); //undefined , 스냅샷으로 값이 방영되지 않습니다.
        var a = 3; 
    }
    inner();
    console.log(a);  // 1
    console.log(b);  // undefined
    var b = 5 ;

    inner2() // 호이스팅

    function inner2(){
        var c = 3;
        console.log('inner2',a); //undefined , 스냅샷으로 값이 방영되지 않습니다.
        console.log(c); // 3
    }
}
outer();
console.log(a); // 1
```

>VariableEnvironment : 현재 컨텍스트 내의 식별자들에 대한 정보 + 외부 환경 <br>
LexicalEnvironment 의 스냅샷 으로 변경되도 방영되지 않음
>>LexicalEnvironment와 담기는 내용은 같지만 최초 실행되는 스냅샷이 다르다.
후 코드 진행에 따라 달라집니다.

<br>

>LexicalEnvironment : 처음에는 VariableEnvironment와 같지만 실시간으로 방영됨
>>정적이라는 의미를 가진 단어이지만 매번 변경되는 환경에 크게 의미가 매칭되지 않습니다. '사전적인' '명시적인' 그런 의미를 담은게 아닌가 좀더 주관적인 해석을 하고있습니다.

<br>

>ThisBinding : this 식별자가 바라봐야하 할 대상객체
>>좀더 편하게 설명하면 스코프의 개념인데 이안에서 
실행하는 시점에서 EC (Excenution Context) 생성되고 그지점에서 
온갓 일들이 일어납니다.

<br>

>LexicalEnvironment, VariableEnvironment(스냅샷) 내부를 이루는 
environmentRecord,outerEnvironmentReference 는 호이스팅의 요인이다. 원리를 파악해보자
>>environmentRecord
>>>현재 컨텍스트와 관련된 코드들이 복사된다. 이때 함수, 지정된 매계변수 식별자(var)등이 구성이 되어있습니다.
<br>※참고 : window, Global은 내장객체가 아닌 호스트객체로 분류함


```
/*호이스팅 예제*/

function a(x){
    console.log(x); //x의 매게값이 출력 
    var x; 
    console.log(x); //x의 매게값이 출력
    var x = 2;
    console.log(x); // 2가 출력이
}
a(1);

function b (){
    console.log(x); // 당연히 여기는 어디 파인드가 호출이 되겠지
    var x = 1;
    console.log(x);
    var x; 
    console.log(x);
    var x = 2;
    console.log(x);
}
b();


//실제 코드가 동작하는 과정
function b (){
    var x;
    var x; 
    var x;
    x = 1;
    console.log(x);
    console.log(x);
    x = 2;
    console.log(x);
}
b();

function c(){
    console.log(c); //undefined
    var c = 'ccc'; // 할당
    console.log(c); // ccc
    console.log(d); // 함수호출 : 호이스팅
    d(); 
    function d(){
        console.log(c);
        console.log(f);
    } // 함수선언
    console.log(d); // 함수호출
    var f = 'fff';
}
c(); 

```

<br>


### ※스냅샷이란?
>특정 시간에 데이터 저장 장치의 상태를별도의 파일이나 이미지로 저장하는 기술로, 스냅샷 기능을 이용하여 데이터를 저장하면 유실된 데이터 복원과 일정 시점의 상태로 데이터를 복원할 수 있습니다.

 ＃[참조사이트1](https://tyle.io/blog/54)
 ＃[참조사이트2](https://choseongho93.tistory.com/189)

----------

<br>
