function Reg (word, keyword) {
    if(!keyword){
        return word
    }
    if(!word){
        return undefined
    }
    /*
			feature
			搜索 H , 返回的 keyword 是 h
			1. 需要结果中的 H 高亮 --- 所以匹配需要加上 i
			2. 需要替换掉的结果依旧是 H --- 所以需要改成下面的方式, 之前的方式是用返回的关键词来替换掉原来的.
			而返回的可能是 h, 原来的可能是 H
			
    */
    let results = word.match(new RegExp(keyword, 'gi'));

    if (results && results.length) {
    	results.forEach(item => {
    		word = word.replace(item, `<span style='color:#D04545'>${item}</span>`)
    	})
    }

    return word;

    // return word.replace(new RegExp(keyword, 'gi'), `<span style='color:#D04545'>${keyword}</span>`)
}
export default Reg;