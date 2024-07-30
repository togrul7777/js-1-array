//  1. Array elementlərinin cəmini / hasilini tapın

// let number = [1, 2, 3, 4, 5, 6, 7] ;


// let cem= 0
// for(i=0; i<number.length; i++){
//     cem+=number[i];
// }
// console.log(cem);


// let hasil=1
// for(i=0; i<number.length; i++){
//     hasil*=number[i];
// }
// console.log(hasil);



// 2. Array elementlərinin içində təkrarlanan elementləri silin
// let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3]

// let a = arr.filter((value,index)=>{

// return arr.indexOf(value)!== index;

// })
// console.log(a);


// 2. usul
// let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3];
// for (let i = 0; i < arr.length; i++) {

// for (let a = i + 1; a < arr.length; a++) {
// if (arr[a] === arr[i]) {
// arr.splice(a, 1);
// a--; 
//         }
//     }
// }
// console.log(arr);



// 3. Array elementlərində ədəd olmayan elementləri silin
// let arr = [1, 2, 3, 4, "w", "g", "t",true,false];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//         arr.splice(i, 1);
//         i--
//     }
// }

// console.log(arr);







// 4. Array elementlərindən maksimum/minimum olanı tapın.
// let arr = [1, 2, 3, 4, 5, 6]
// let max = arr [0];
// let min = arr [0];

// for(i=0; i<arr.length; i++)
// {
//     if(arr[i]> max){
//         max=arr[i]
//     }else{
//         min=arr[i]
//     }
// }
// console.log ("max " + max);
// console.log("min " + min);



// //5. Daxil edilən cumlədəki simvol sayını çıxarın.

// let text="Daxil edilən cumlədəki simvol sayını çıxarın."
// console.log(text.length);


// 6. Array elementlerini 2-yə vurub yeni bir array kimi çap edin.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
// }
// console.log(arr);



// 7. Array elementlərini tərsinə çap edin.
// let char=["A", "B", "C", "D", "E"]

// for(i=char.length-1; i>=0; i--){

//     console.log(char[i]);
// } 


// 8. Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan JavaScript proqramı yazın.
// (Massivlərin uzunluqları mütləq eyni olmalıdı)

// let arr=[10,24,35,48,64]

// let arr1=[24,34,17,23,39]

// let result=[]

// for(i=0;i<arr.length;i++){

//     result[i]=arr[i]+arr1[i]
// }
// console.log(result);


// 9. Sözü tərsinə çevirən program yazın.

// let arr= "Salam";
// let ters ="";
// for(i=arr.length-1;i>=0 ;i--){

//     ters+=arr[i];
// }
// console.log(ters);


// 10. Cümlədəki sözlərin yerini tərsinə çevirən program yazın.

// let cumle = "Men fexr edirem ki Azerbaycanliyam";

// let soz = cumle.split(" ");
// soz.reverse();
// let tersCumle = soz.join(" ");

// console.log(tersCumle);





//11. Daxil edilmiş ədədi sözlə yazan funskiya (Məs��input:1, output : Bir)
// let teklik =["sifir", "bir", "iki", "uc", "dord", "bes", "alti", "yeddi", "sekkiz", "doqquz"]
// let onluq =["", "on", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "doxsan"]

// let eded=+ prompt()
// let netice1 =""
// let netice2 = ""
// for(i=1; i<teklik.length;i++){
//         if(eded===0 ){

//         console.log("sifir");
//         break;

//         }
//         if(eded%10==i && eded%10!=0){
//         netice1+=teklik[i]

//         }   

//         if (parseInt(eded/10)==i){
//                 netice2+=onluq[i]

//         }

// }
// console.log(netice2 + " " + netice1);









//12. Verilmiş mətndə sözlərin sayını tapın.

// let metn =prompt("")
// let soz = metn.split(" ");
// let sozSayi = soz.length;

// console.log("Sozlerin sayi: " + sozSayi);



//13. Verilmiş cümlədə artıq boşluq simvollarını silin
// let metn = "      Meni         bagislayin          sixintilarim                  var"

// split_Metn = metn.split(" ");

// for (i = 0; i < split_Metn.length; i++) {
//     if (split_Metn[i] ==="")
//         {
//       split_Metn.splice(i, 1)
//         i--;
//     }
// }




//14. Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın

// let metn = "menim adim Togruldur. baki seherinde yasayiram. bos bekar insanam))";
// let split_Metn = metn.split(". ")
// let yeni_Cumle = "";

// for (i = 0; i < split_Metn.length; i++) {
//     yeni_Cumle += split_Metn[i][0].toUpperCase() + split_Metn[i].substring(1) + ". ";
// }

// console.log(yeni_Cumle);




//15. Iki arrayin eyniliyini yoxlayin
// let arr1 = [, 2, 3, 4, 5];
// let arr2 = [, 2, 3, 4, 6];

// let arr1_2 = true

// if (arr1.length !== arr2.length) {
//     arr1_2 = false;
// } else {

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             arr1_2 = false;

//         }
//     }
// }

// console.log(arr1_2);



//16. Array elementlərini sort metodundan istifadə etmədən artma / azalma
//istiqamətinə görə sıralayın (bubble sort)

// let array = [5, 3, 8, 4, 2, 9];
// let n = array.length;

// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//         if (array[j] > array[j + 1]) {
//             // Elemanları yer değiştir
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }

// console.log(array);





//17. İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi
//oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir. Məs:
//Giriş: 3456 Çıxış: 3 4 5 6
// let number =+ prompt();

// let spcNumber = number.toString().split('').join(' ');

// console.log(spcNumber);








//18. Verilmiş mətndə təkrarlanan sözlərin sayını tapın   
//  let metn = "bu bir test mətnidir və bu mətn təkrarlanan sözlərdən ibarətdir  və verilmiş mətndə təkrarlanan sözlərin sayını tapın";
// let sozler = metn.split(" ");
// let sozSayi = {};

// for (let i = 0; i < sozler.length; i++) {
//   let soz = sozler[i];
//   if (sozSayi[soz]) {
//     sozSayi[soz]++;
//   } else {
//     sozSayi[soz] = 1;
//   }
// }
// console.log(sozSayi);




//19. Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan
//keçməyən tələbələri objectdən silin.

// let telebeler = {
//         Togrul: { bal: 75 },
//         Eziz: { bal: 45 },
//         Elsen : { bal: 85 },
//         Nizami: { bal: 49 },
//         Fermayil: { bal: 75 },
//         Semed :{ bal :90 }
//     };

//     for (let telebe in telebeler) {
//         if (telebeler[telebe].bal < 50) {
//             delete telebeler[telebe];
//         }
//     }


//20. Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə -------------------------------------------------------------------
//əsasən)

   
 



//21. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək
//haqqının hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq olan iş         
//saatları üçün əmək haqqı 2 qat hesablansın
//     let saatBasiQazanc= 10 
//     let heftelikSaat=40
//     let maas=0
//         if(heftelikSaat<=40){
//             maas=saatBasiQazanc*heftelikSaat*4
//         }else{
//             maas=(saatBasiQazanc*40+(heftelikSaat-40)*2*saatBasiQazanc)*4
//         }
//   console.log(maas);





//22. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.

// let metn = "ADNA-nın 1 milyona yaxın kitab fondu olan kitabxanası vardır. ADNA-nın həmçinin  idman kompleksi və Nabranda istirahət zonası vardır.";
//menbe-ADNSU vikipediya))

// let metnHisse = metn.split('ADNA');
// let deyisenMetn = metnHisse.join('ADNSU');

// console.log(deyisenMetn);



//23. 3 rəqəmli ədədin rəqəmləri cəmini tapın.

// let number = +prompt("3 rəqəmli ədəd daxil edin:");
// let cem = 0;

// let numbers = number.toString().split('');

// for (let i = 0; i < numbers.length; i++) {

//   cem += parseInt(numbers[i]);
// }
// console.log(cem);




//24. Array daxilində tək yerdə duran elementləri ekrana verin
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 1; i < array.length; i += 2) {
//   console.log(array[i]);
// }


//25. Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin

// let arr=[5,6,7,8,9,10,12,15,18,20,25,27,30]
// let say=0
// for( i=0;i<arr.length; i++){
//  if(arr[i] %5===0){
//   say++;
// }
// }
// console.log(say);


//26. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.

// let arr = [7,8,9,10,14,21,23,25,27,30,35,42,45,47]
// let sonBolunen=0

// for (i=arr.length-1; i>=0; i--){
// if(arr[i]%7===0){
//     sonBolunen=arr[i]
//     break;
//   }
// }
// console.log(sonBolunen);




//27. Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini   
//dəyişən proqram tərtib edin

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let min = 0;
// let max = 0;

// for (i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[min]) {
//                 min = i

//         } if (arr[i] > arr[max]) {
//                 max = i
//         }

// }
// let abc = arr[min]
// arr[min] = arr[max]
// arr[max] = abc
// console.log(arr);










//28. Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran proqram tərtib edin

// let arr = [1,2,3,4,5,6,7,8,9,10] ;
// let randomIndex = Math.floor(Math.random() * arr.length);
// let randomElement = arr[randomIndex];
// console.log(randomElement);



//29. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin   

// for (i = 1; i < 100; i++) {
//         if (i % 10 == 1) {
//                 console.log(i);
//         }
// }



//30. Daxil olunmuş ifadənin polindrom olduğunu yoxlayın. (polindrom
//dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554   
//və s.)

// let reqem = + prompt()
// yeni = reqem.toString()
// yeniReqem = yeni.split("").reverse().join("")

// if (yeniReqem === yeni) {
//         console.log(yeniReqem + " polindrom");
// } else {
//         console.log(yeniReqem + " polindrom deyil");
// }


//31. Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə
//sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və s.)
// let soz1 = prompt("Birinci sozu daxil edin")
// let soz2 = prompt("Ikinci sozu daxil edin")

// function anaqram(soz1, soz2) {
//         let sozler1 = soz1.toLowerCase().split("").sort().join("");
//         let sozler2 = soz2.toLowerCase().split("").sort().join("");

//         return sozler1 === sozler2;
// }
// if (anaqram(soz1, soz2)) {
//         console.log(soz1 + " " + soz2 + " anaqramdir");
// } else {
//         console.log(soz1 + " " +  soz2 + " anaqram deyil");
// }


//32. Daxil olunmuş mətndə saitləri silən proqram yaradın
// let metn = "salam necəsən bu gun hava necedir";
// let saitler = "aıoueəiöü";
// let yeniMetn = "";

// for (let i = 0; i < metn.length; i++) {
//     let herf = metn[i];

//     if (!saitler.includes(herf)) {
//         yeniMetn += herf;
//     }
// }

// console.log(yeniMetn);


//33. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət string
//ifadə yaradın (məsələn input:5 output: qeg8d)
// let reqem = prompt("Bir ədəd daxil edin:");

// let herfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let netice = "";

// for ( i = 0; i < reqem; i++) {

//         let random = Math.floor(Math.random() * herfler.length);
//         netice += herfler[random];
// }

// console.log(netice);

//34. Daxil olunmuş sözdə neçə sait və samit olduğunu tapın
//         let metn = "Salam";
// let saitler = "aıoueəiöü";
// let char = "";
// let saitSayi = "";
// let samitSayi = "";
// for (i=0; i<metn.length; i++){
//         char = metn[i]
//         if (saitler.includes(char)) {
//                 saitSayi++
//         }else{
//                 samitSayi++
//         }
// }
// console.log(saitSayi);
// console.log(samitSayi);

//35. Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod
//yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin
//cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3; 28=1+2+4+7+14)

// let eded=+prompt("Eded daxil edin")
// let netice=0
// for(let i=1;i<eded;i++){
//     if(eded%i==0){
//         netice+=i
//     }
// }
// if(netice==eded){
//     console.log(eded + " Mukemmel eded");
// }else{
//       console.log(eded + " Qeyri mukemmel eded");
//   }

//36. Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın

// let number = +prompt("3 rəqəmli ədəd daxil edin:");
// let cem = 0;

// let numbers = number.toString().split('');

// for (let i = 0; i < numbers.length; i++) {

//   cem += parseInt(numbers[i]);
// }
// console.log(cem);
