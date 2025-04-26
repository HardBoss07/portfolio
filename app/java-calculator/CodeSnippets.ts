export const hello: string = `
//Operator Button Actions
Map<Button, String> operatorButtons = new HashMap<>();
operatorButtons.put(addBtn, "+");
operatorButtons.put(subtractBtn, "-");
operatorButtons.put(multiplyBtn, "*");
operatorButtons.put(divideBtn, "/");

operatorButtons.forEach((button, operator) ->
        button.setOnAction(e -> {
            if (!calc.currentNumber.isEmpty()) {
                calc.allNumbers.add(calc.currentNumber);
                calc.currentNumber = "";
                calc.allOperations.add(operator);
            } else if (!calc.allOperations.isEmpty()) {
                calc.allOperations.set(calc.allOperations.size() - 1, operator);
            } else {
                calc.allOperations.add(operator);
            }
            equationLabel.setText(calc.getCurrentEquation());
        })
);

//Negate button
negateBtn.setOnAction(e -> {
    if (calc.currentNumber.isEmpty()) {
        calc.currentNumber += "-";
    } else {
        if (calc.currentNumber.charAt(0) == '-') {
            calc.currentNumber = calc.currentNumber.substring(1);
        } else {
            calc.currentNumber = "-" + calc.currentNumber;
        }
    }
    output.setText(calc.getCurrentNumber());
    equationLabel.setText(calc.getCurrentEquation());
});
`;

export const calculator: string = `
public void calculateAll() {
    if (correctNumberAndOperationAmount()) {
        try {
            String[] parts = currentEquation.split(" ");
            System.out.println("Parts: " + Arrays.toString(parts));

            for (int i = 1; i < parts.length; i++) {
                if (parts[i].equals("*") || parts[i].equals("/")) {
                    double prevNum = Double.parseDouble(parts[i - 1]);
                    double nextNum = Double.parseDouble(parts[i + 1]);
                    double resultPart = 0;

                    if (parts[i].equals("*")) {
                        resultPart = prevNum * nextNum;
                    } else if (parts[i].equals("/")) {
                        if (nextNum == 0) {
                            result = "#ERROR#";
                            return;
                        }
                        resultPart = prevNum / nextNum;
                    }

                    parts[i - 1] = String.valueOf(resultPart);
                    for (int j = i; j < parts.length - 2; j++) {
                        parts[j] = parts[j + 2];
                    }
                    parts = Arrays.copyOf(parts, parts.length - 2);
                    i--;
                }
            }
        // cut off
    } else {
        result = "#ERROR#";
    }
}
`;