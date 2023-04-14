function getData(line) {
    line = line.split(" "); 
    if (line[11] == " ") {
        line[11] = "_"; 
        line[12] = "_"
    }

    const words = getWords(line);

    if (words[0] != " " && !isNaN(words[0]) && words.length === 9) {
        const [sr, ext, misc, jun, dir, date, time, duration, amt] = words; 
        return {
            sr, ext, misc, jun, dir, date, time, duration, amt
        }
    }
}
