var dimensaomatriz = 4
var menu = 4
//1-> Mostrar matriz completa
//2-> Diagonal Principal
//3-> Triangulo Superior
//4-> Triangulo Inferior

let matriz = [['01 ', '02 ', '03 ', '04 ', '05 '], ['06 ', '07 ', '08 ', '09 ', '10 '], ['11 ', '12 ', '13 ', '14 ', '15 '], ['16 ', '17 ', '18 ', '19 ', '20 '], ['21 ', '22 ', '23 ', '24 ', '25 ']]
/* console.log(matriz[3][3]) */

console.log(`Selecionada opção ${menu}`)
switch (menu){
    case 1:
        for ( i=0 ; i<5 ; i++){
            for ( c=0 ; c<5 ; c++){
                process.stdout.write(matriz[i][c] + " ")
            }
            console.log()
        }
        break
    case 2:
        for ( i=0 ; i<5 ; i++){
            for ( c=0 ; c<5 ; c++){
                if (i==c){
                    process.stdout.write(matriz[i][c] + " ")
                } else {
                    process.stdout.write("    ")
                }
            }
            console.log()
        }
        break
    case 3:
        for ( i=0 ; i<5 ; i++){
            for ( c=0 ; c<5 ; c++){
                if (i>c){
                    process.stdout.write(matriz[i][c] + " ")
                } else {
                    process.stdout.write("    ")
                }
            }
            console.log()
        }
        break
    case 4:
        for ( i=0 ; i<5 ; i++){
            for ( c=0 ; c<5 ; c++){
                if (i<c){
                    process.stdout.write(matriz[i][c] + " ")
                } else {
                    process.stdout.write("    ")
                }
            }
            console.log()
        }
        break

}
