export const init: string = `
    INIT:         ; init all variables
    MOV PLAYER, 50
    MOV MOVES, 0
    MOV DONE, 0
    MOV DR, 0
    
    MOV C1, 49
    MOV C2, 50
    MOV C3, 51
    MOV C4, 52
    MOV C5, 53
    MOV C6, 54
    MOV C7, 55
    MOV C8, 56
    MOV C9, 57
    
    JMP PLRCHANGE
`;

export const rules: string = `
CHECK:                  ; 8 possible combinations
    CHECK1:             ; checking combo combo 1, 2, 3
        MOV AL, C1
        MOV BL, C2
        MOV CL, C3

        CMP AL, BL
        JNZ CHECK2

        CMP BL, CL
        JNZ CHECK2

        MOV DONE, 1
        JMP BOARD

    CHECK2:             ; checking combo 4, 5, 6
        MOV AL, C4
        MOV BL, C5
        MOV CL, C6
        
        CMP AL, BL
        JNZ CHECK3

        CMP BL, CL
        JNZ CHECK3

        MOV DONE, 1
        JMP BOARD

    CHECK3:             ; checking combo 7, 8, 9
        MOV AL, C4
        MOV BL, C5
        MOV CL, C6
    
        CMP AL, BL
        JNZ CHECK4
    
        CMP BL, CL
        JNZ CHECK4
    
        MOV DONE, 1
        JMP BOARD
`;

export const invalids: string = `
TAKEN:
    DEC MOVES           ; set cursor
        MOV AH, 4
        MOV DH, 16
        MOV DL, 20
        INT 10h

    LEA DX, TKN         ; cell taken display
    MOV AH, 9
    INT 21h

    MOV AH, 7
    INT 21h             ; set cursor
        MOV AH, 2
        MOV DH, 16
        MOV DL, 20
        INT 10h
    
    LEA DX, EMP         ; empty line to overwrite
    MOV AH, 9
    INT 21h             ; set cursor
        MOV AH, 2
        MOV DH, 16
        MOV DL, 20
        INT 10h
    
    JMP INPUT
`;