import { Calculator } from "./calculator";

describe('Calculator', () => {
    describe('add', () => {
        it('should return 5 when 2 and 3 are given as inputs', ()=> {
            // 1. Arrange  2. Act 3. Assert
            const a = 2;
            const b = 3;

            // Act
            const calculator = new Calculator();
            const result = calculator.add(a, b);

            // Assert
            expect(result).toBe(5);
        });

        it('should return "Invalid input" when a number and a non-number (character) is given', () => {
            const a = 'a';
            const b = 2;
            const calculator = new Calculator();

            const result = calculator.add(a as any, b);

            expect(result).toBe('Invalid input');
        });

        it('should return 1 when -1 and 2 are given as inputs', ()=> {
            const a = -1;
            const b = 2;
            const calculator = new Calculator();
            
            // Act
            const result = calculator.add(a, b);
            
            // Assert
            expect(result).toBe(1);
        });
    });

    describe('subtract', () => {
        it('should return 1 when 3 and 2 are given as inputs', ()=> {
            const a = 3;
            const b = 2;
            const calculator = new Calculator();
            
            // Act
            const result = calculator.subtract(a, b);
            
            // Assert
            expect(result).toBe(1);
        });

        it('should return "I cant subtract this input" when a number and a non-number (character) is given', () => {
            const a = 'a';
            const b = 2;
            const calculator = new Calculator();

            const result = calculator.subtract(a as any, b);

            expect(result).toBe('I cant subtract this input');

        });

    });
});
