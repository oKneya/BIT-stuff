
// 1. Syntax error :

// try {
//    let x = 5;
//    console.log(x);
//    console.log(y);
// } catch (error){
//     console.log("imamo problem sa " + error.message);
// }

// 2. Reference error - To se desava kada pokusamo da upotrebimo varijablu koja ne postoji ili koja jos nije definisana.

// try {
//     console.log(varijablica);
// } catch (error) {
//     console.error("imamo problem sa" , error.message);
// }

// 3. Type error - To se desava kada pokusamo da iskoristimo dve varijable drugog tipa.

// var a = 1; 
// try {
//    a.toUpperCase();
// } catch (error) {
//     console.log("imamo problem sa " + error.message);
// }