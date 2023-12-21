/*
	Author: Lucas Barretto e Silva
	Descrição: Estudo sobre a Classe Math

*/


/*
Propriedades da Classe/ Constantes
E			Returns Euler's number (approx. 2.718)
LN2			Returns the natural logarithm of 2 (approx. 0.693)
LN10		Returns the natural logarithm of 10 (approx. 2.302)
LOG2E		Returns the base-2 logarithm of E (approx. 1.442)
LOG10E		Returns the base-10 logarithm of E (approx. 0.434)
PI			Returns PI (approx. 3.14)
SQRT1_2		Returns the square root of 1/2 (approx. 0.707)
SQRT2		Returns the square root of 2 (approx. 1.414)
*/

/*
Métodos da Classe

abs(x)	Returns the absolute value of x
	Ex: alert(Math.abs(-3)); //Resultado será 3
	
acos(x)	Returns the arccosine of x, in radians
asin(x)	Returns the arcsine of x, in radians
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
cos(x)	Returns the cosine of x (x is in radians)
exp(x)	Returns the value of Ex

log(x)	Returns the natural logarithm (base E) of x

max(x, y, z, ..., n)	Returns the number with the highest value
	Ex: (alert(Math.max(2,3,-5,10))); // Retornará o número 10, pois é o maior.
	
min(x, y, z, ..., n)	Returns the number with the lowest value
	Ex: (alert(Math.max(2,3,-5,10))); // Retornará o número -5, pois é o menor.
	
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
	Ex: var n = Math.random() + 1 * 10; // Caso vc queira descartar o zero é adicionado o 
				+ 1, e o *10 é para que seja um numero entre 0 e 10, e tendo em vista o +1, logo
				retornará numeros entre 1 e 10.
				
round(x)	Rounds x to the nearest integer
	Ex: alert(Math.round(1.7)); // Retornará o interger 2.

floor(x)	Returns x, rounded downwards to the nearest integer
	Ex: alert(Math.round(1.7)); // Retornará o interger 1, pois trás o interger abaixo.
	
ceil(x)	Returns x, rounded upwards to the nearest integer
	Ex: alert(Math.round(1.7)); // Retornará o interger 2, pois trás o interger acima.

sin(x)	Returns the sine of x (x is in radians)
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle

*/

	var n = ((Math.random()) * 7) + 1;
	n = n.toFixed(0);
	alert(n);