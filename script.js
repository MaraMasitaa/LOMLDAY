document.querySelector('.bar').style.visibility = "hidden";       
        let blurrr = document.getElementById('rank_1');
        let correct = document.querySelector('.h3_rs1');
        let incorrect = document.querySelector('.h3_rs2');
        let pointt = document.querySelector('.h3_rs3');
        let qestion = [];
        let result = [1,3,4,2,4,1,3,2,3,4,1,2,3,4,2,1,3,4,2,4,2,4,1,4,1,4,2,4,2,4,1,2,3,4,4,1,2,3,3,2,3,4,2,3,2,4,2,4,2,2,2,2,4,2,1,3,4,1,4,1,2,3,4,1,2,3,1,3,1,2,1,3,2,3,3,1,3,1,3,1,3,4,2,1,3,1,2,3,1,3,2,1,3,4,2,1];
        let correction = 0;
        let incorrection = 0;
        let pointtion = 0;
        let total_second = 301;
    
    function run(){
        const myInterval = setInterval(function () {
            --total_second;
            let minute = parseInt(total_second / 60);
            let second = total_second % 60;
            document.getElementById("countdown").innerHTML = 
            String(minute).padStart(2, '0')
             + ":" +String(second).padStart(2, '0');
            
            if(total_second == 0){
                clearInterval(myInterval);
                document.getElementById("button_done").disabled= true;
            }
        }, 1000);
    }
        function clickk()
        {
            let n=document.querySelector(".name").value;
            document.querySelector(".namee").innerHTML=`NAME:${n}`;
            blurrr.style.filter = "blur(6px)";
            document.querySelector('.click').style.visibility = "hidden";
            document.querySelector('.bar').style.visibility = "visible";
            let a1= document.getElementsByName('a1');
            for(let i =0; i<a1.length; i++)
            {
                if(a1[i].checked)
                {
                    qestion.push(a1[i].value);
                }
            }
            let a2= document.getElementsByName('a2');
            for(let i =0; i<a2.length; i++)
            {
                if(a2[i].checked)
                {
                    qestion.push(a2[i].value);
                }
            }
            let a3= document.getElementsByName('a3');
            for(let i =0; i<a3.length; i++)
            {
                if(a3[i].checked)
                {
                    qestion.push(a3[i].value);
                }
            }
            let a4= document.getElementsByName('a4');
            for(let i =0; i<a4.length; i++)
            {
                if(a4[i].checked)
                {
                    qestion.push(a4[i].value);
                }
            }
            let a5= document.getElementsByName('a5');
            for(let i =0; i<a5.length; i++)
            {
                if(a5[i].checked)
                {
                    qestion.push(a5[i].value);
                }
            }
            let a6= document.getElementsByName('a6');
            for(let i =0; i<a6.length; i++)
            {
                if(a6[i].checked)
                {
                    qestion.push(a6[i].value);
                }
            }
            let a7= document.getElementsByName('a7');
            for(let i =0; i<a7.length; i++)
            {
                if(a7[i].checked)
                {
                    qestion.push(a7[i].value);
                }
            }
            let a8= document.getElementsByName('a8');
            for(let i =0; i<a8.length; i++)
            {
                if(a8[i].checked)
                {
                    qestion.push(a8[i].value);
                }
            }
            let a9= document.getElementsByName('a9');
            for(let i =0; i<a9.length; i++)
            {
                if(a9[i].checked)
                {
                    qestion.push(a9[i].value);
                }
            }
            let a10= document.getElementsByName('a10');
            for(let i =0; i<a10.length; i++)
            {
                if(a10[i].checked)
                {
                    qestion.push(a10[i].value);
                }
            }
            let a11= document.getElementsByName('a11');
            for(let i =0; i<a11.length; i++)
            {
                if(a11[i].checked)
                {
                    qestion.push(a11[i].value);
                }


            }
            let a12= document.getElementsByName('a12');
            for(let i =0; i<a12.length; i++)
            {
                if(a12[i].checked)
                {
                    qestion.push(a12[i].value);
                }
            }
            let a13= document.getElementsByName('a13');
            for(let i =0; i<a13.length; i++)
            {
                if(a13[i].checked)
                {
                    qestion.push(a13[i].value);
                }
            }
            let a14= document.getElementsByName('a14');
            for(let i =0; i<a14.length; i++)
            {
                if(a14[i].checked)
                {
                    qestion.push(a14[i].value);
                }
            }
            let a15= document.getElementsByName('a15');
            for(let i =0; i<a15.length; i++)
            {
                if(a15[i].checked)
                {
                    qestion.push(a15[i].value);
                }
            }
            let a16= document.getElementsByName('a16');
            for(let i =0; i<a16.length; i++)
            {
                if(a16[i].checked)
                {
                    qestion.push(a16[i].value);
                }
            }
            let a17= document.getElementsByName('a17');
            for(let i =0; i<a17.length; i++)
            {
                if(a17[i].checked)
                {
                    qestion.push(a17[i].value);
                }
            }
            let a18= document.getElementsByName('a18');
            for(let i =0; i<a18.length; i++)
            {
                if(a18[i].checked)
                {
                    qestion.push(a18[i].value);
                }
            }
            let a19= document.getElementsByName('a19');
            for(let i =0; i<a19.length; i++)
            {
                if(a19[i].checked)
                {
                    qestion.push(a19[i].value);
                }
            }
            let a20= document.getElementsByName('a20');
            for(let i =0; i<a20.length; i++)
            {
                if(a20[i].checked)
                {
                    qestion.push(a20[i].value);
                }
            }
            let a21= document.getElementsByName('a21');
            for(let i =0; i<a21.length; i++)
            {
                if(a21[i].checked)
                {
                    qestion.push(a21[i].value);
                }
            }
            let a22= document.getElementsByName('a22');
            for(let i =0; i<a22.length; i++)
            {
                if(a22[i].checked)
                {
                    qestion.push(a22[i].value);
                }
            }
            let a23= document.getElementsByName('a23');
            for(let i =0; i<a23.length; i++)
            {
                if(a23[i].checked)
                {
                    qestion.push(a23[i].value);
                }
            }
            let a24= document.getElementsByName('a24');
            for(let i =0; i<a24.length; i++)
            {
                if(a24[i].checked)
                {
                    qestion.push(a24[i].value);
                }
            }
            let a25= document.getElementsByName('a25');
            for(let i =0; i<a25.length; i++)
            {
                if(a25[i].checked)
                {
                    qestion.push(a25[i].value);
                }
            }
            let a26= document.getElementsByName('a26');
            for(let i =0; i<a26.length; i++)
            {
                if(a26[i].checked)
                {
                    qestion.push(a26[i].value);
                }
            }
            let a27= document.getElementsByName('a27');
            for(let i =0; i<a27.length; i++)
            {
                if(a27[i].checked)
                {
                    qestion.push(a27[i].value);
                }
            }
            let a28= document.getElementsByName('a28');
            for(let i =0; i<a28.length; i++)

            {
                if(a28[i].checked)
                {
                    qestion.push(a28[i].value);
                }
            }
            let a29= document.getElementsByName('a29');
            for(let i =0; i<a29.length; i++)
            {
                if(a29[i].checked)
                {
                    qestion.push(a29[i].value);
                }
            }
            let a30= document.getElementsByName('a30');
            for(let i =0; i<a30.length; i++)
            {
                if(a30[i].checked)
                {
                    qestion.push(a30[i].value);
                }
            }
            let a31= document.getElementsByName('a31');
            for(let i =0; i<a31.length; i++)
            {
                if(a31[i].checked)
                {
                    qestion.push(a31[i].value);
                }
            }
            let a32= document.getElementsByName('a32');
            for(let i =0; i<a32.length; i++)
            {
                if(a32[i].checked)
                {
                    qestion.push(a32[i].value);
                }
            }
            let a33= document.getElementsByName('a33');
            for(let i =0; i<a33.length; i++)
            {
                if(a33[i].checked)
                {
                    qestion.push(a33[i].value);
                }
            }
            let a34= document.getElementsByName('a34');
            for(let i =0; i<a34.length; i++)
            {
                if(a34[i].checked)
                {
                    qestion.push(a34[i].value);
                }
            }
            let a35= document.getElementsByName('a35');
            for(let i =0; i<a35.length; i++)
            {
                if(a35[i].checked)
                {
                    qestion.push(a35[i].value);
                }
            }
            let a36= document.getElementsByName('a36');
            for(let i =0; i<a36.length; i++)
            {
                if(a36[i].checked)
                {
                    qestion.push(a36[i].value);
                }
            }
            let a37= document.getElementsByName('a37');
            for(let i =0; i<a37.length; i++)
            {
                if(a37[i].checked)
                {
                    qestion.push(a37[i].value);
                }
            }
            let a38= document.getElementsByName('a38');
            for(let i =0; i<a38.length; i++)
            {
                if(a38[i].checked)
                {
                    qestion.push(a38[i].value);
                }
            }
            let a39= document.getElementsByName('a39');
            for(let i =0; i<a39.length; i++)
            {
                if(a39[i].checked)
                {
                    qestion.push(a39[i].value);
                }
            }
            let a40= document.getElementsByName('a40');
            for(let i =0; i<a40.length; i++)
            {
                if(a40[i].checked)
                {
                    qestion.push(a40[i].value);
                }
            }
            let a41= document.getElementsByName('a41');
            for(let i =0; i<a41.length; i++)
            {
                if(a41[i].checked)
                {
                    qestion.push(a41[i].value);
                }
            }
            let a42= document.getElementsByName('a42');
            for(let i =0; i<a42.length; i++)
            {
                if(a42[i].checked)
                {
                    qestion.push(a42[i].value);
                }
            }
            let a43= document.getElementsByName('a43');
            for(let i =0; i<a43.length; i++)
            {
                if(a43[i].checked)
                {
                    qestion.push(a43[i].value);
                }
            }
            let a44= document.getElementsByName('a44');
            for(let i =0; i<a44.length; i++)
            {
                if(a44[i].checked)
                {
                    qestion.push(a44[i].value);

                }
            }
            let a45= document.getElementsByName('a45');
            for(let i =0; i<a45.length; i++)
            {
                if(a45[i].checked)
                {
                    qestion.push(a45[i].value);
                }
            }
            let a46= document.getElementsByName('a46');
            for(let i =0; i<a46.length; i++)
            {
                if(a46[i].checked)
                {
                    qestion.push(a46[i].value);
                }
            }
            let a47= document.getElementsByName('a47');
            for(let i =0; i<a47.length; i++)
            {
                if(a47[i].checked)
                {
                    qestion.push(a47[i].value);
                }
            }

            let a48= document.getElementsByName('a48');
            for(let i =0; i<a48.length; i++)
            {
                if(a48[i].checked)
                {
                    qestion.push(a48[i].value);
                }
            }

            let a49= document.getElementsByName('a49');
            for(let i =0; i<a49.length; i++)
            {
                if(a49[i].checked)
                {
                    qestion.push(a49[i].value);
                }
            }
            let a50= document.getElementsByName('a50');
            for(let i =0; i<a50.length; i++)
            {
                if(a50[i].checked)
                {
                    qestion.push(a50[i].value);
                }
            }
            let a51= document.getElementsByName('a51');
            for(let i =0; i<a51.length; i++)
            {
                if(a51[i].checked)
                {
                    qestion.push(a51[i].value);
                }
            }
            let a52= document.getElementsByName('a52');
            for(let i =0; i<a52.length; i++)
            {
                if(a52[i].checked)
                {
                    qestion.push(a52[i].value);
                }
            }
            let a53= document.getElementsByName('a53');
            for(let i =0; i<a53.length; i++)
            {
                if(a53[i].checked)
                {
                    qestion.push(a53[i].value);
                }
            }
            let a54= document.getElementsByName('a54');
            for(let i =0; i<a54.length; i++)
            {
                if(a54[i].checked)
                {
                    qestion.push(a54[i].value);
                }
            }
            let a55= document.getElementsByName('a55');
            for(let i =0; i<a55.length; i++)
            {
                if(a55[i].checked)
                {
                    qestion.push(a55[i].value);
                }
            }
            let a56= document.getElementsByName('a56');
            for(let i =0; i<a56.length; i++)
            {
                if(a56[i].checked)
                {
                    qestion.push(a56[i].value);
                }
            }
            let a57= document.getElementsByName('a57');
            for(let i =0; i<a57.length; i++)
            {
                if(a57[i].checked)
                {
                    qestion.push(a57[i].value);
                }
            }
            let a58= document.getElementsByName('a58');
            for(let i =0; i<a58.length; i++)
            {
                if(a58[i].checked)
                {
                    qestion.push(a58[i].value);
                }
            }
            let a59= document.getElementsByName('a59');
            for(let i =0; i<a59.length; i++)
            {
                if(a59[i].checked)
                {
                    qestion.push(a59[i].value);
                }
            }
            let a60= document.getElementsByName('a60');
            for(let i =0; i<a60.length; i++)
            {
                if(a60[i].checked)
                {
                    qestion.push(a60[i].value);
                }
            }
            let a61= document.getElementsByName('a61');

            for(let i =0; i<a61.length; i++)
            {
                if(a61[i].checked)
                {
                    qestion.push(a61[i].value);
                }
            }
            let a62= document.getElementsByName('a62');
            for(let i =0; i<a62.length; i++)
            {
                if(a62[i].checked)
                {
                    qestion.push(a62[i].value);
                }
            }
            let a63= document.getElementsByName('a63');
            for(let i =0; i<a63.length; i++)
            {
                if(a63[i].checked)
                {
                    qestion.push(a63[i].value);
                }
            }
            let a64= document.getElementsByName('a64');
            for(let i =0; i<a64.length; i++)
            {
                if(a64[i].checked)
                {
                    qestion.push(a64[i].value);
                }
            }
            let a65= document.getElementsByName('a65');
            for(let i =0; i<a65.length; i++)
            {
                if(a65[i].checked)
                {
                    qestion.push(a65[i].value);
                }
            }
            let a66= document.getElementsByName('a66');
            for(let i =0; i<a66.length; i++)
            {
                if(a66[i].checked)
                {
                    qestion.push(a66[i].value);
                }
            }
            let a67= document.getElementsByName('a67');
            for(let i =0; i<a67.length; i++)
            {
                if(a67[i].checked)
                {
                    qestion.push(a67[i].value);
                }
            }
            let a68= document.getElementsByName('a68');
            for(let i =0; i<a68.length; i++)
            {
                if(a68[i].checked)
                {
                    qestion.push(a68[i].value);
                }
            }
            let a69= document.getElementsByName('a69');
            for(let i =0; i<a69.length; i++)
            {
                if(a69[i].checked)
                {
                    qestion.push(a69[i].value);
                }
            }
            let a70= document.getElementsByName('a70');
            for(let i =0; i<a70.length; i++)
            {
                if(a70[i].checked)
                {
                    qestion.push(a70[i].value);
                }
            }
            let a71= document.getElementsByName('a71');
            for(let i =0; i<a71.length; i++)
            {
                if(a71[i].checked)
                {
                    qestion.push(a71[i].value);
                }
            }
            let a72= document.getElementsByName('a72');
            for(let i =0; i<a72.length; i++)
            {
                if(a72[i].checked)
                {
                    qestion.push(a72[i].value);
                }
            }
            let a73= document.getElementsByName('a73');
            for(let i =0; i<a73.length; i++)
            {
                if(a73[i].checked)
                {
                    qestion.push(a73[i].value);
                }
            }
            let a74= document.getElementsByName('a74');
            for(let i =0; i<a74.length; i++)
            {
                if(a74[i].checked)
                {
                    qestion.push(a74[i].value);
                }
            }
            let a75= document.getElementsByName('a75');
            for(let i =0; i<a75.length; i++)
            {
                if(a75[i].checked)
                {
                    qestion.push(a75[i].value);
                }
            }
            let a76= document.getElementsByName('a76');
            for(let i =0; i<a76.length; i++)
            {
                if(a76[i].checked)
                {
                    qestion.push(a76[i].value);
                }
            }
            for(let j=0; j<qestion.length; j++)
            {
                if(qestion[j] == result[j])
                {
                    correction +=1;
                }     
                else
                {
                    if(qestion.length == 0)
                    {
                        incorrection = "No one..!";
                        break;
                    }
                    if(qestion[j] != result[j])
                    {
                        incorrection = incorrection + 1;
                    } 
                }          
            }
            pointtion = correction*10;
            if(pointtion < 0)
            {
                pointtion = 0;
            }
            avgg = parseFloat(pointtion/100);
            correct.innerHTML = correction;
            incorrect.innerHTML = incorrection;
            pointt.innerHTML = pointtion;
            avg.innerHTML = avgg;
            
        }