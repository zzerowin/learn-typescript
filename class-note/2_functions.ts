// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b:number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}

// JS에서는 가능하지만 TS에서는 정의되지 않은 파라미터 제한 (30)
// sum(10, 20, 30);