function checkLength(stroka1, maxLenght)
{
  if (String(stroka1).length <= maxLenght){
    return true;
  }
  return false;
}
checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);


function palindrom(stroka2)
{
  stroka2 = stroka2.replaceAll(' ', '');
  let str = "";
  for (let i = String(stroka2).length-1; i >= 0; i--)
  {
    str += stroka2[i];
  }
  if (String(stroka2).toUpperCase() === String(str).toUpperCase())
  {
    return true;
  }
  return false;
}
palindrom('топот');
palindrom('ДовОд');
palindrom('Кекс');
palindrom('Лёша на полке клопа нашёл ');
