function fiscalCode(person) {
    const surname_abc = person.surname;
    const name_abc = person.name;
    const date = person.dob;
    const gender = person.gender;

    // console.log(surname_formatting(get_chars(surname_abc)).concat(name_formatting(get_chars(name_abc))).concat(get_date(date, gender)));

    function get_chars(word){
      const vowels = /[aeiou]/gi;
      const consonants = /[^aeiou\s\W\d]/gi;

      return {
          cons: (word.match(consonants) || []),
          vowels: (word.match(vowels) || [])
        }

    }

    function surname_formatting(obj){
      let result = [...obj.cons, ...obj.vowels];

      while (result.length < 3){
        result.push('X');
      }

      return result.slice(0, 3).join('').toUpperCase();
    }

    function name_formatting(obj){
      let result = [...obj.cons, ...obj.vowels];
      
      if (obj.cons.length > 3){
        return [obj.cons[0], obj.cons[2], obj.cons[3], ...obj.vowels].slice(0, 3).join('').toUpperCase();
      }

      while(result.length < 3){
          result.push('X');
      }

      return result.slice(0, 3).join('').toUpperCase();
    }

    function get_date(date, gender){
      const months = { 
        '01': "A", '02': "B", '03': "C", '04': "D", '05': "E", '06': "H",
        '07': "L", '08': "M", '09': "P", '10': "R", '11': "S", '12': "T" 
      }

      let [day, month, year] = date.split('/').map(Number);
      year = year % 100;
      month = months[String(month).padStart(2, '0')];
      day = gender == "F" ? String(day += 40) : day < 10 ? String(day).padStart(2, '0'): String(day); 
      return `${year}${month}${day}`;
    }

    return surname_formatting(get_chars(surname_abc)).concat(name_formatting(get_chars(name_abc))).concat(get_date(date, gender))
}

fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
  }); // "DBTMTT00A01"

  fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
  }) // "YUXHLN50T41"
  
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
  }) // "MSOMKY28A16