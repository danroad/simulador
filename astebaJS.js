let margemDisponivel ;
let valorParcela;
let parcelaUtilizada;
let mensagemInvalida =  document.getElementById('saldoInvalido')
let mensagemValida = document.getElementById('saldoValido')

let valorLiberado = {
    parcela12:0,
    parcela18: 0,
    parcela24: 0,
    parcela36: 0
}

let bt_Asteba = $lerDOM('bt_SimularAsteba')

function $lerDOM (idTag) {return document.getElementById(idTag)}



function $inserir(valor,parcela,parcelaUsada,margem){
    let escreverValor = $lerDOM(`valorLiberado${parcela}`).textContent = valor
    let escreverParcela = $lerDOM(`prazo${parcela}`).textContent = parcela
    let escreverSaldo = $lerDOM(`saldoParcela${parcela}`).textContent = (margem - parcelaUsada).toFixed(2)
    let escreverValorParcela = $lerDOM(`valorParcela${parcela}`).textContent = parcelaUsada
    let ativarDiv = $lerDOM('resultadoAsteba').style.display='block'
    


    
    
}


function $parcela12( margem12){
    document.getElementById('linhaAsteba12').style.display='block'
    
        
        

        if ( (margem12 < 40 )){
           return  document.getElementById('linhaAsteba12').style.display='none'        
        }

        
        else if ( (margem12 >= 40.18 ) && ( margem12 < 50.23)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return parcelaUtilizada = '40.18', valorLiberado.parcela12 = '400.00'
            
            
        }
        else if ( (margem12 >= 50.23) && ( margem12 < 60.28  )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none'             
            return   parcelaUtilizada = '50.23', valorLiberado.parcela12 = '500.00'
            
        }
        else if ( (margem12 >= 60.28) && ( margem12 < 70.32   )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return parcelaUtilizada = '60.28', valorLiberado.parcela12 = '600.00'
            
        }
        else if ( (margem12 >= 70.32) && ( margem12 < 80.37)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '70.32',valorLiberado.parcela12 = '700.00'
        }
        else if ( (margem12 >= 80.37) && ( margem12 < 90.42)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '80.37', valorLiberado.parcela12 = '800.00'
        }
        else if ( (margem12 >= 90.42) && ( margem12 < 100.46)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '90.42', valorLiberado.parcela12 = '900.00'
        }
        else if ( (margem12 >= 100.46) && ( margem12 < 110.51)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '100.46', valorLiberado.parcela12 = '1000.00'
        }
        else if ( (margem12 >= 110.51) && ( margem12 < 120.55)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '110.51', valorLiberado.parcela12 = '1100.00'
        }
        else if ( (margem12 >= 120.55) && ( margem12 < 130.60 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '120.55', valorLiberado.parcela12 = '1200.00'
        }
        else if ( (margem12 >= 130.60) && ( margem12 < 140.65)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return parcelaUtilizada = '130.60', valorLiberado.parcela12 = '1300.00'
        }
        else if ( (margem12 >= 140.65) && ( margem12 < 150.69 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return parcelaUtilizada = 140.65, valorLiberado.parcela12 = '1400.00'
        }
        else if ( (margem12 >= 150.69) && ( margem12 < 160.74 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = 150.69, valorLiberado.parcela12 = '1500.00'
        }
        else if ( (margem12 >= 160.74) && ( margem12 < 170.79 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '160.74', valorLiberado.parcela12 = '1600.00'
        }
        else if ( (margem12 >= 170.79) && ( margem12 < 180.83 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '170.79', valorLiberado.parcela12 = '1700.00'
        }
        else if ( (margem12 >= 180.83) && ( margem12 < 190.88 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '180.83', valorLiberado.parcela12 = '1800.00'
        }
        else if ( (margem12 >= 190.88) && ( margem12 < 200.92 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '190.88', valorLiberado.parcela12 = '1900.00'
        }
        else if ( (margem12 >= 200.92) && ( margem12 < 210.97 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '200.92', valorLiberado.parcela12 = '2000.00'
        }
        else if ( (margem12 >= 210.97) && ( margem12 < 221.02)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '210.97', valorLiberado.parcela12 = '2100.00'
        }
        else if ( (margem12 >= 221.02) && ( margem12 < 231.06 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '210.97', valorLiberado.parcela12 = '2200.00'
        }
        else if ( (margem12 >= 231.06) && ( margem12 < 241.11)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '231.06', valorLiberado.parcela12 = '2300.00'
        }
        else if ( (margem12 >= 241.11 ) && ( margem12 < 251.16)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '241.11', valorLiberado.parcela12 = '2400.00'
        }
        else if ( (margem12 >= 251.16) && ( margem12 < 261.20)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '251.16', valorLiberado.parcela12 = '2500.00'
        }
        else if ( (margem12 >= 261.20) && ( margem12 < 271.25)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '261.20', valorLiberado.parcela12 = '2600.00'
        }
        else if ( (margem12 >= 271.25 ) && ( margem12 < 281.29 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '271.25', valorLiberado.parcela12 = '2700.00'
        }
        else if ( (margem12 >= 281.29 ) && ( margem12 < 291.34)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '281.29 ', valorLiberado.parcela12 = '2800.00'
        }
        else if ( (margem12 >= 291.34 ) && ( margem12 < 301.39 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '291.34', valorLiberado.parcela12 = '2900.00'
        }
        else if ( (margem12 >= 301.39 ) && ( margem12 < 311.43)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '301.39', valorLiberado.parcela12 = '3000.00'
        }
        else if ( (margem12 >= 311.43 ) && ( margem12 < 321.48)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '311.43', valorLiberado.parcela12 = '3100.00'
        }
        else if ( (margem12 >= 321.48 ) && ( margem12 < 331.52)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '321.48', valorLiberado.parcela12 = '3200.00'
        }
        else if ( (margem12 >= 331.52) && ( margem12 < 341.57)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '331.52', valorLiberado.parcela12 = '3300.00'
        }
        else if ( (margem12 >= 341.57 ) && ( margem12 < 351.62)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '341.57', valorLiberado.parcela12 = '3400.00'
        }
        else if ( (margem12 >= 351.62 ) && ( margem12 < 361.66 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '351.62', valorLiberado.parcela12 = '3500.00'
        }
        else if ( (margem12 >= 361.66 ) && ( margem12 < 371.71)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '361.66', valorLiberado.parcela12 = '3600.00'
        }
        else if ( (margem12 >= 371.71 ) && ( margem12 < 381.76 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '371.71', valorLiberado.parcela12 = '3700.00'
        }
        else if ( (margem12 >= 381.76 ) && ( margem12 < 391.80)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '381.76', valorLiberado.parcela12 = '3800.00'
        }
        else if ( (margem12 >= 391.80 ) && ( margem12 < 401.85)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '391.80', valorLiberado.parcela12 = '3900.00'
        }
        else if ( (margem12 >= 401.85 ) && ( margem12 < 411.89 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '401.85', valorLiberado.parcela12 = '4000.00'
        }
        else if ( (margem12 >= 411.89 ) && ( margem12 < 421.94)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '411.89', valorLiberado.parcela12 = '4100.00'
        }
        else if ( (margem12 >= 421.94 ) && ( margem12 < 431.99)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '421.94', valorLiberado.parcela12 = '4200.00'
        }
        else if ( (margem12 >= 431.99 ) && ( margem12 < 442.03)){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '431.99', valorLiberado.parcela12 = '4300.00'
        }
        else if ( (margem12 >= 442.03 ) && ( margem12 < 452.08 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '442.03', valorLiberado.parcela12 = '4400.00'
        }
        else if ( (margem12 >= 452.08 ) && ( margem12 < 462.13 )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '452.08', valorLiberado.parcela12 = '4500.00'
        }     
        else if ( (margem12 >= 462.13 ) && ( margem12 < 472.17  )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '462.13 ', valorLiberado.parcela12 = '4600.00'
        }
        else if ( (margem12 >= 472.17 ) && ( margem12 < 482.22  )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '472.17', valorLiberado.parcela12 = '4700.00'
        }
        else if ( (margem12 >= 482.22 ) && ( margem12 < 492.26  )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '482.22', valorLiberado.parcela12 = '4800.00'
        }
        else if ( (margem12 >= 492.26 ) && ( margem12 < 502.31  )){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '492.26', valorLiberado.parcela12 = '4900.00'
        }
        else if (margem12 >= 502.31 ){
            mensagemValida.style.display='block'
            mensagemInvalida.style.display='none' 
            return  parcelaUtilizada = '502.31', valorLiberado.parcela12 = '5000.00'
        }



        

}

function $parcela18( margem12){
    document.getElementById('linhaAsteba18').style.display='block'

    if ( (margem12 < 29.08 )){
           return  document.getElementById('linhaAsteba18').style.display='none'    
    }
    else if ( (margem12 >= 29.08  ) && ( margem12 < 36.35)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '29.08', valorLiberado.parcela12 = '400.00'
        
        
    }
    else if ( (margem12 >= 36.35) && ( margem12 < 43.63 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none'             
        return   parcelaUtilizada = '36.35', valorLiberado.parcela12 = '500.00'
        
    }
    else if ( (margem12 >= 43.63) && ( margem12 < 50.90)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '43.63', valorLiberado.parcela12 = '600.00'
        
    }
    else if ( (margem12 >= 50.90) && ( margem12 < 58.17 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '50.90',valorLiberado.parcela12 = '700.00'
    }
    else if ( (margem12 >= 58.17) && ( margem12 < 65.44 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '58.17', valorLiberado.parcela12 = '800.00'
    }
    else if ( (margem12 >= 65.44) && ( margem12 < 72.71)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '65.44', valorLiberado.parcela12 = '900.00'
    }
    else if ( (margem12 >= 72.71) && ( margem12 < 79.98 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '72.71', valorLiberado.parcela12 = '1000.00'
    }
    else if ( (margem12 >= 79.98 ) && ( margem12 < 87.25 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '79.98 ', valorLiberado.parcela12 = '1100.00'
    }
    else if ( (margem12 >= 87.25) && ( margem12 < 94.52)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '87.25', valorLiberado.parcela12 = '1200.00'
    }
    else if ( (margem12 >= 94.52) && ( margem12 < 101.79 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '94.52', valorLiberado.parcela12 = '1300.00'
    }
    else if ( (margem12 >= 101.79) && ( margem12 < 109.06)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '101.79' , valorLiberado.parcela12 = '1400.00'
    }
    else if ( (margem12 >= 109.06 ) && ( margem12 < 116.33 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '109.06', valorLiberado.parcela12 = '1500.00'
    }
    else if ( (margem12 >= 116.33 ) && ( margem12 < 123.60  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '116.33 ', valorLiberado.parcela12 = '1600.00'
    }
    else if ( (margem12 >= 123.60) && ( margem12 < 130.88  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '123.60', valorLiberado.parcela12 = '1700.00'
    }
    else if ( (margem12 >= 130.88) && ( margem12 < 138.15)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '130.88', valorLiberado.parcela12 = '1800.00'
    }
    else if ( (margem12 >= 138.15) && ( margem12 < 145.42  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '138.15', valorLiberado.parcela12 = '1900.00'
    }
    else if ( (margem12 >= 145.42) && ( margem12 < 152.69  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '145.42', valorLiberado.parcela12 = '2000.00'
    }
    else if ( (margem12 >= 152.69) && ( margem12 < 159.96  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '152.69', valorLiberado.parcela12 = '2100.00'
    }
    else if ( (margem12 >= 159.96) && ( margem12 < 167.23)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '159.96', valorLiberado.parcela12 = '2200.00'
    }
    else if ( (margem12 >= 167.23) && ( margem12 < 174.50  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '167.23', valorLiberado.parcela12 = '2300.00'
    }
    else if ( (margem12 >= 174.50) && ( margem12 < 181.77)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '174.50', valorLiberado.parcela12 = '2400.00'
    }
    else if ( (margem12 >= 181.77) && ( margem12 < 189.04 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '181.77', valorLiberado.parcela12 = '2500.00'
    }
    else if ( (margem12 >= 189.04) && ( margem12 < 196.31 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '189.04', valorLiberado.parcela12 = '2600.00'
    }
    else if ( (margem12 >= 196.31) && ( margem12 < 203.58 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '196.31', valorLiberado.parcela12 = '2700.00'
    }
    else if ( (margem12 >= 203.58 ) && ( margem12 < 210.86)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '203.58', valorLiberado.parcela12 = '2800.00'
    }
    else if ( (margem12 >= 210.86 ) && ( margem12 < 218.13)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '210.86', valorLiberado.parcela12 = '2900.00'
    }
    else if ( (margem12 >= 218.13 ) && ( margem12 < 225.40  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '218.13', valorLiberado.parcela12 = '3000.00'
    }
    else if ( (margem12 >= 225.40   ) && ( margem12 < 232.67 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '225.40', valorLiberado.parcela12 = '3100.00'
    }
    else if ( (margem12 >= 232.67 ) && ( margem12 < 239.94)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '232.67', valorLiberado.parcela12 = '3200.00'
    }
    else if ( (margem12 >= 239.94 ) && ( margem12 < 247.21 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '239.94', valorLiberado.parcela12 = '3300.00'
    }
    else if ( (margem12 >= 247.21 ) && ( margem12 < 254.48)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '247.21', valorLiberado.parcela12 = '3400.00'
    }
    else if ( (margem12 >= 254.48) && ( margem12 < 261.75 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '254.48', valorLiberado.parcela12 = '3500.00'
    }
    else if ( (margem12 >= 261.75 ) && ( margem12 < 269.02  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '261.75', valorLiberado.parcela12 = '3600.00'
    }
    else if ( (margem12 >= 269.02 ) && ( margem12 < 276.29 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '269.02', valorLiberado.parcela12 = '3700.00'
    }
    else if ( (margem12 >= 276.29 ) && ( margem12 < 283.56 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '276.29', valorLiberado.parcela12 = '3800.00'
    }
    else if ( (margem12 >= 283.56 ) && ( margem12 < 290.83)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '283.56', valorLiberado.parcela12 = '3900.00'
    }
    else if ( (margem12 >= 290.83) && ( margem12 < 298.11 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '290.83', valorLiberado.parcela12 = '4000.00'
    }
    else if ( (margem12 >= 298.11 ) && ( margem12 < 305.38  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '298.11', valorLiberado.parcela12 = '4100.00'
    }
    else if ( (margem12 >= 305.38 ) && ( margem12 < 312.65 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '305.38', valorLiberado.parcela12 = '4200.00'
    }
    else if ( (margem12 >= 312.65 ) && ( margem12 < 319.92 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '312.65', valorLiberado.parcela12 = '4300.00'
    }
    else if ( (margem12 >= 319.92  ) && ( margem12 < 327.19 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '319.92 ', valorLiberado.parcela12 = '4400.00'
    }
    else if ( (margem12 >= 327.19) && ( margem12 < 334.46  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '327.19', valorLiberado.parcela12 = '4500.00'
    }
    else if ( (margem12 >= 334.46 ) && ( margem12 < 341.73  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '334.46', valorLiberado.parcela12 = '4600.00'
    }     
    else if ( (margem12 >= 341.73  ) && ( margem12 < 349.00 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '341.73 ', valorLiberado.parcela12 = '4700.00'
    }
    else if ( (margem12 >= 349.00 ) && ( margem12 < 356.27   )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '349.00', valorLiberado.parcela12 = '4800.00'
    }
    else if ( (margem12 >= 356.27  ) && ( margem12 < 363.54  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '356.27 ', valorLiberado.parcela12 = '4900.00'
    }
    else if ( (margem12 >= 363.54)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '363.54 ', valorLiberado.parcela12 = '4900.00'
    }
  

}

function $parcela24( margem12){
    document.getElementById('linhaAsteba24').style.display='block'
     

    if ( (margem12 < 23.62 )){
        return document.getElementById('linhaAsteba24').style.display='none'
               
    }
     

    else if ( (margem12 >= 23.62  ) && ( margem12 < 29.52)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '23.62', valorLiberado.parcela24 = '400.00'
        
        
    }
    else if ( (margem12 >= 29.52) && ( margem12 < 35.43)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none'             
        return   parcelaUtilizada = '29.52', valorLiberado.parcela24  = '500.00'
        
    }
    else if ( (margem12 >= 35.43) && ( margem12 < 41.33 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '35.43', valorLiberado.parcela24  = '600.00'
        
    }
    else if ( (margem12 >= 41.33) && ( margem12 < 47.24 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '41.33',valorLiberado.parcela24  = '700.00'
    }
    else if ( (margem12 >= 47.24) && ( margem12 < 53.14  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '47.24', valorLiberado.parcela24  = '800.00'
    }
    else if ( (margem12 >= 53.14) && ( margem12 < 59.05)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '53.14', valorLiberado.parcela24  = '900.00'
    }
    else if ( (margem12 >= 59.05) && ( margem12 < 64.95  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '59.05', valorLiberado.parcela24  = '1000.00'
    }
    else if ( (margem12 >= 64.95 ) && ( margem12 < 70.86  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '64.95', valorLiberado.parcela24  = '1100.00'
    }
    else if ( (margem12 >= 70.86) && ( margem12 < 76.76 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '70.86', valorLiberado.parcela24  = '1200.00'
    }
    else if ( (margem12 >= 76.76) && ( margem12 < 82.67 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '76.76', valorLiberado.parcela24 = '1300.00'
    }
    else if ( (margem12 >= 82.67) && ( margem12 < 88.57 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '82.67' , valorLiberado.parcela24  = '1400.00'
    }
    else if ( (margem12 >= 88.57  ) && ( margem12 < 94.48  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '88.57', valorLiberado.parcela24  = '1500.00'
    }
    else if ( (margem12 >= 94.48 ) && ( margem12 < 100.38)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '94.48', valorLiberado.parcela24  = '1600.00'
    }
    else if ( (margem12 >= 100.38) && ( margem12 < 106.29  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '100.38', valorLiberado.parcela24  = '1700.00'
    }
    else if ( (margem12 >= 106.29 ) && ( margem12 < 112.19 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '106.29 ', valorLiberado.parcela24  = '1800.00'
    }
    else if ( (margem12 >= 112.19) && ( margem12 < 118.09  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '112.19', valorLiberado.parcela24  = '1900.00'
    }
    else if ( (margem12 >= 118.09) && ( margem12 < 124.00    )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '118.09', valorLiberado.parcela24  = '2000.00'
    }
    else if ( (margem12 >= 124.00  ) && ( margem12 < 129.90  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '124.00', valorLiberado.parcela24  = '2100.00'
    }
    else if ( (margem12 >= 129.90) && ( margem12 < 135.81 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '129.90', valorLiberado.parcela24  = '2200.00'
    }
    else if ( (margem12 >= 135.81) && ( margem12 < 141.71 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '135.81', valorLiberado.parcela24  = '2300.00'
    }
    else if ( (margem12 >= 141.71) && ( margem12 < 147.62 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '141.71', valorLiberado.parcela24  = '2400.00'
    }
    else if ( (margem12 >= 147.62) && ( margem12 < 153.52  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '147.62', valorLiberado.parcela24 = '2500.00'
    }
    else if ( (margem12 >= 153.52) && ( margem12 < 159.43  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '153.52', valorLiberado.parcela24 = '2600.00'
    }
    else if ( (margem12 >= 159.43) && ( margem12 < 165.33 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '159.43', valorLiberado.parcela24  = '2700.00'
    }
    else if ( (margem12 >= 165.33 ) && ( margem12 < 171.24 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '165.33', valorLiberado.parcela24  = '2800.00'
    }
    else if ( (margem12 >= 171.24 ) && ( margem12 < 177.14 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '171.24', valorLiberado.parcela24  = '2900.00'
    }
    else if ( (margem12 >= 177.14 ) && ( margem12 < 183.05   )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '177.14', valorLiberado.parcela24  = '3000.00'
    }
    else if ( (margem12 >= 183.05   ) && ( margem12 < 188.95  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '183.05 ', valorLiberado.parcela24  = '3100.00'
    }
    else if ( (margem12 >= 188.95 ) && ( margem12 < 194.86 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '188.95', valorLiberado.parcela24 = '3200.00'
    }
    else if ( (margem12 >= 194.86  ) && ( margem12 < 200.76  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '194.86 ', valorLiberado.parcela24  = '3300.00'
    }
    else if ( (margem12 >= 200.76 ) && ( margem12 < 206.67 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '200.76', valorLiberado.parcela24  = '3400.00'
    }
    else if ( (margem12 >= 206.67 ) && ( margem12 < 212.57  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '206.67 ', valorLiberado.parcela24  = '3500.00'
    }
    else if ( (margem12 >= 212.57  ) && ( margem12 < 218.48 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '212.57 ', valorLiberado.parcela24  = '3600.00'
    }
    else if ( (margem12 >= 218.48 ) && ( margem12 < 224.38  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '218.48', valorLiberado.parcela24  = '3700.00'
    }
    else if ( (margem12 >= 224.38  ) && ( margem12 < 230.28 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '224.38 ', valorLiberado.parcela24  = '3800.00'
    }
    else if ( (margem12 >= 230.28  ) && ( margem12 < 236.19 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '230.28 ', valorLiberado.parcela24  = '3900.00'
    }
    else if ( (margem12 >= 236.19) && ( margem12 < 242.09 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '236.19', valorLiberado.parcela24  = '4000.00'
    }
    else if ( (margem12 >= 242.09 ) && ( margem12 < 248.00)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '242.09', valorLiberado.parcela24  = '4100.00'
    }
    else if ( (margem12 >= 248.00 ) && ( margem12 < 253.90 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '248.00', valorLiberado.parcela24  = '4200.00'
    }
    else if ( (margem12 >= 253.90  ) && ( margem12 < 259.81  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '253.90 ', valorLiberado.parcela24  = '4300.00'
    }
    else if ( (margem12 >= 259.81) && ( margem12 < 265.71 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '259.81', valorLiberado.parcela24  = '4400.00'
    }
    else if ( (margem12 >= 265.71) && ( margem12 < 271.62)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '265.71', valorLiberado.parcela24  = '4500.00'
    }
    else if ( (margem12 >= 271.62 ) && ( margem12 < 277.52)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '271.62', valorLiberado.parcela24  = '4600.00'
    }     
    else if ( (margem12 >= 277.52  ) && ( margem12 < 283.43)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '277.52 ', valorLiberado.parcela24  = '4700.00'
    }
    else if ( (margem12 >= 283.43 ) && ( margem12 < 289.33)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '283.43', valorLiberado.parcela24  = '4800.00'
    }
    else if ( (margem12 >= 289.33) && ( margem12 < 295.24   )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '289.33 ', valorLiberado.parcela24  = '4900.00'
    }
    else if ( (margem12 >= 295.24)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '295.24', valorLiberado.parcela24  = '5000.00'
    }
  

}

function $parcela36( margem12){
    document.getElementById('linhaAsteba36').style.display='block'
     

    if ( (margem12 < 18.32 )){
        mensagemValida.style.display='none'
        mensagemInvalida.style.display='block'
       
    }
    else if ( (margem12 >= 18.32  ) && ( margem12 < 22.90)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '18.32 ', valorLiberado.parcela12 = '400.00'
        
        
    }
    else if ( (margem12 >= 22.90) && ( margem12 < 27.48)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return   parcelaUtilizada = '22.90', valorLiberado.parcela12 = '500.00'
        
    }
    else if ( (margem12 >= 27.48) && ( margem12 < 32.06 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none'
        return parcelaUtilizada = '27.48', valorLiberado.parcela12 = '600.00'
        
    }
    else if ( (margem12 >= 32.06) && ( margem12 < 36.64 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '32.06',valorLiberado.parcela12 = '700.00'
    }
    else if ( (margem12 >= 36.64) && ( margem12 < 41.22  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '36.64', valorLiberado.parcela12 = '800.00'
    }
    else if ( (margem12 >= 41.22) && ( margem12 < 45.80)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '41.22', valorLiberado.parcela12 = '900.00'
    }
    else if ( (margem12 >= 45.80) && ( margem12 < 50.38 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '45.80', valorLiberado.parcela12 = '1000.00'
    }
    else if ( (margem12 >= 50.38) && ( margem12 < 54.96 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '50.38', valorLiberado.parcela12 = '1100.00'
    }
    else if ( (margem12 >= 54.96) && ( margem12 < 59.54 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '54.96', valorLiberado.parcela12 = '1200.00'
    }
    else if ( (margem12 >= 59.54) && ( margem12 < 64.13 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '59.54', valorLiberado.parcela12 = '1300.00'
    }
    else if ( (margem12 >= 64.13) && ( margem12 < 68.71 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return parcelaUtilizada = '64.13' , valorLiberado.parcela12 = '1400.00'
    }
    else if ( (margem12 >= 68.71  ) && ( margem12 < 73.29  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '68.71', valorLiberado.parcela12 = '1500.00'
    }
    else if ( (margem12 >= 73.29) && ( margem12 < 77.87)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '73.29', valorLiberado.parcela12 = '1600.00'
    }
    else if ( (margem12 >= 77.87) && ( margem12 < 82.45 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '77.87', valorLiberado.parcela12 = '1700.00'
    }
    else if ( (margem12 >= 82.45 ) && ( margem12 < 87.03 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '82.45 ', valorLiberado.parcela12 = '1800.00'
    }
    else if ( (margem12 >= 87.03) && ( margem12 < 91.61  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '87.03', valorLiberado.parcela12 = '1900.00'
    }
    else if ( (margem12 >= 91.61) && ( margem12 < 96.19 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '91.61', valorLiberado.parcela12 = '2000.00'
    }
    else if ( (margem12 >= 96.19  ) && ( margem12 < 100.77 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '96.19', valorLiberado.parcela12 = '2100.00'
    }
    else if ( (margem12 >= 100.77 ) && ( margem12 < 105.35 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '100.77', valorLiberado.parcela12 = '2200.00'
    }
    else if ( (margem12 >= 105.35) && ( margem12 < 109.93 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '105.35', valorLiberado.parcela12 = '2300.00'
    }
    else if ( (margem12 >= 109.93) && ( margem12 < 114.51)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '109.93', valorLiberado.parcela12 = '2400.00'
    }
    else if ( (margem12 >= 114.51) && ( margem12 < 119.09 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '114.51', valorLiberado.parcela12 = '2500.00'
    }
    else if ( (margem12 >= 119.09) && ( margem12 < 123.67)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '119.09', valorLiberado.parcela12 = '2600.00'
    }
    else if ( (margem12 >= 123.67) && ( margem12 < 128.25 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '123.67', valorLiberado.parcela12 = '2700.00'
    }
    else if ( (margem12 >= 128.25 ) && ( margem12 < 132.83 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '128.25', valorLiberado.parcela12 = '2800.00'
    }
    else if ( (margem12 >= 132.83 ) && ( margem12 < 137.41 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '132.83', valorLiberado.parcela12 = '2900.00'
    }
    else if ( (margem12 >= 137.41 ) && ( margem12 < 141.99)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '137.41', valorLiberado.parcela12 = '3000.00'
    }
    else if ( (margem12 >= 141.99 ) && ( margem12 < 146.57 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '1141.99', valorLiberado.parcela12 = '3100.00'
    }
    else if ( (margem12 >= 146.57 ) && ( margem12 < 151.15 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '146.57', valorLiberado.parcela12 = '3200.00'
    }
    else if ( (margem12 >= 151.15 ) && ( margem12 < 155.73 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '151.15', valorLiberado.parcela12 = '3300.00'
    }
    else if ( (margem12 >= 155.73  ) && ( margem12 < 160.31 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '155.73 ', valorLiberado.parcela12 = '3400.00'
    }
    else if ( (margem12 >= 160.31 ) && ( margem12 < 164.89 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '160.31 ', valorLiberado.parcela12 = '3500.00'
    }
    else if ( (margem12 >= 164.89 ) && ( margem12 < 169.47 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '164.89', valorLiberado.parcela12 = '3600.00'
    }
    else if ( (margem12 >= 169.47 ) && ( margem12 < 174.05  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '169.47', valorLiberado.parcela12 = '3700.00'
    }
    else if ( (margem12 >= 174.05  ) && ( margem12 < 178.63 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '174.05', valorLiberado.parcela12 = '3800.00'
    }
    else if ( (margem12 >= 178.63  ) && ( margem12 < 183.22 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '178.63', valorLiberado.parcela12 = '3900.00'
    }
    else if ( (margem12 >= 183.22) && ( margem12 < 187.80 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '183.22', valorLiberado.parcela12 = '4000.00'
    }
    else if ( (margem12 >= 187.80 ) && ( margem12 < 192.38)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '187.80', valorLiberado.parcela12 = '4100.00'
    }
    else if ( (margem12 >= 192.38) && ( margem12 < 196.96 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '192.38', valorLiberado.parcela12 = '4200.00'
    }
    else if ( (margem12 >= 196.96 ) && ( margem12 < 201.54  )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '196.96', valorLiberado.parcela12 = '4300.00'
    }
    else if ( (margem12 >= 201.54) && ( margem12 < 206.12 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '201.54', valorLiberado.parcela12 = '4400.00'
    }
    else if ( (margem12 >= 206.12) && ( margem12 < 210.70)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '206.12', valorLiberado.parcela12 = '4500.00'
    }
    else if ( (margem12 >= 210.70 ) && ( margem12 < 215.28)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '210.70', valorLiberado.parcela12 = '4600.00'
    }     
    else if ( (margem12 >= 215.28  ) && ( margem12 < 219.86)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '215.28 ', valorLiberado.parcela12 = '4700.00'
    }
    else if ( (margem12 >= 219.86 ) && ( margem12 < 224.44)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '219.86', valorLiberado.parcela12 = '4800.00'
    }
    else if ( (margem12 >= 224.44) && ( margem12 < 229.02 )){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '224.44', valorLiberado.parcela12 = '4900.00'
    }
    else if ( (margem12 >= 229.02)){
        mensagemValida.style.display='block'
        mensagemInvalida.style.display='none' 
        return  parcelaUtilizada = '229.02', valorLiberado.parcela12 = '5000.00'
    }
  

}



bt_Asteba.addEventListener('click',()=>{
    margemDisponivel = $lerDOM('margemDisponivel').value
    if(margemDisponivel.includes(',')==true ){
        margemDisponivel = margemDisponivel.replace(',','.')
    }
        
    let simulacao12 =  $inserir($parcela12(margemDisponivel),12,parcelaUtilizada,margemDisponivel)
    let simulacao18 =  $inserir($parcela18(margemDisponivel),18,parcelaUtilizada,margemDisponivel)
    let simulacao24 =  $inserir($parcela24(margemDisponivel),24,parcelaUtilizada,margemDisponivel)
    let simulacao36 =  $inserir($parcela36(margemDisponivel),36,parcelaUtilizada,margemDisponivel)


})