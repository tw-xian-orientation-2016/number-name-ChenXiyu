describe("cutTo3",function(){

    it("return [9] when input 9",function(){
        var inputNumber = "9";
        var number = cutTo3(inputNumber);
        var expectNumber = ['9'] 
        expect(expectNumber).toEqual(number)
        
    });

    it("return [12,321] when input 12321", function(){
        var inputNumber = "12321";
        var number = cutTo3(inputNumber);
        var expectOutput = ['12','321'];
        expect(expectOutput).toEqual(number);
    });

    it("return [21] when input 21", function(){
        var inputNumber = "21";
        var number = cutTo3(inputNumber);
        var expectOutput = ['21'];
        expect(expectOutput).toEqual(number);
    });

    it("return [97,797,621] when input 97797621", function(){
        var inputNumber = "97797621";
        var number = cutTo3(inputNumber);
        var expectOutput = ['97','797','621'];
        expect(expectOutput).toEqual(number);
    });
});

describe("translater()",function(){

    it("translat ['9'] to ['nine']",function(){
        var input = ['9']
        var expectOutput = ['nine']
        var output = translater(input)
        expect(expectOutput).toEqual(expectOutput)
    });

    it("translat ['12','321'] to ['twelve','three hundred and twenty one']",function(){
        var input = ['12','321']
        var expectOutput = ['twelve','three hundred and twenty one']
        var output = translater(input)
        expect(expectOutput).toEqual(expectOutput)
    });

    it("translat ['21'] to ['twenty one']",function(){
        var input = ['21']
        var expectOutput = ['twenty one']
        var output = translater(input)
        expect(expectOutput).toEqual(expectOutput)
    });

    it("translat ['97','797','621'] to ['ninety nine', 'seven hundred and ninety seven','six hundred and twenty two']",function(){
        var input = ['97','797','621']
        var expectOutput = ['ninety nine', 'seven hundred and ninety seven','six hundred and twenty two']
        var output = translater(input)
        expect(expectOutput).toEqual(expectOutput)
    });

    it("translat ['100'] to ['one hundred']",function(){
        var input = ['100']
        var expectOutput = ['one hubdred']
        var output = translater(input)
        expect(expectOutput).toEqual(expectOutput)
    });
    it("translat ['101'] to ['one hundred and one']",function(){
        var input = ['101']
        var expectOutput = ['one hubdred and one']
        var output = translater(input)
        expect(expectOutput).toEqual(expectOutput)
    });
});

describe('splice()',function(){
    it('splice ["one hundred and one","twenty"] to "one hundred and one thousand and twenty"',function(){
        var input = ["one hundred and one","twenty"]
        var expectOutput = "one hundred and one thousand and twenty " 
        var output = splice(input);
        expect(expectOutput).toEqual(output)
    });
});

describe('main',function(){
    it('transform 99 to ninety nine',function(){
        var input = "99"
        var expectOutput = "ninety nine " 
        var output = main(input);
        expect(expectOutput).toEqual(output)
    });
    it('transform 300 to three hundred',function(){
        var input = "300"
        var expectOutput = "three hundred " 
        var output = main(input);
        expect(expectOutput).toEqual(output)
    });
    it('transform 310 to three hundred and ten',function(){
        var input = "310"
        var expectOutput = "three hundred and ten " 
        var output = main(input);
        expect(expectOutput).toEqual(output)
    });
    it('transform 1001000 to one million and one thousand ',function(){
        var input = "1001000"
        var expectOutput = 'one million and one thousand'
        var output = main(input);
        expect(expectOutput).toEqual(output)
    });
});
