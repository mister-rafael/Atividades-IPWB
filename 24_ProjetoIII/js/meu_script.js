$(document).ready(function() {
            $("#btn1").click(function() {
                var data1 = $("#data1").val();
                var dia = $("#dia").val();
                var url = "http://zpfvzz.hospedagemelastica.com.br/netlab/admin/admin.datasoma.logic?string="+data1+";"+dia;
                 $.getJSON(url, function(retorno) {
                            if (!("erro" in retorno)) {
                                //Atualiza os campos com os valores da consulta.
                                $("#extenso").val(retorno.extenso);
                            } //end if.
                            else {
                                 alert("Erro");
                            }
                        });
            });/* FIM DA FUNÇÃO somaData*/

            $("#botao2").click(function() {
                    var valor1 = $("#data2").val();
                    var valor2 = $("#data3").val();
                    var url = "http://zpfvzz.hospedagemelastica.com.br/netlab/admin/admin.datadiferenca.logic?string="+valor1+";"+valor2;
                     $.getJSON(url, function(retorno) {
                                if (!("erro" in retorno)) {
                                    //Atualiza os campos com os valores da consulta.
                                    $("#resultado").val(retorno.diferenca + " dia(s)");
                                } //end if.
                                else {
                                     alert("Erro");
                                }
                            });
                });/* FIM DA FUNÇÃO Data Diferença*/
            
            $("#botao3").click(function() {
                    var valor = $("#data4").val();
                    var url = "http://zpfvzz.hospedagemelastica.com.br/netlab/admin/admin.dataconverte.logic?string="+valor;
                     $.getJSON(url, function(retorno) {
                                if (!("erro" in retorno)) {
                                    //Atualiza os campos com os valores da consulta.
                                    $("#resultado2").val(retorno.dataconvertida);
                                } //end if.
                                else {
                                     alert("Erro");
                                }
                            });
                });/* FIM DA FUNÇÃO Data Diferença*/
        }); /* FIM DA FUNÇÃO ready*/

                