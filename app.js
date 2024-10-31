const ELEMENTS = [
    'Ac', 'Ag', 'Al', 'Am', 'Ar', 'As', 'At', 'Au',
    'B', 'Ba', 'Be', 'Bh', 'Bi', 'Bk', 'Br',
    'C', 'Ca', 'Cd', 'Ce', 'Cf', 'Cl', 'Cm', 'Cn', 'Co', 'Cr', 'Cs', 'Cu',
    'Db', 'Ds', 'Dy',
    'Er', 'Es', 'Eu',
    'F', 'Fe', 'Fl', 'Fm', 'Fr',
    'Ga', 'Gd', 'Ge',
    'H', 'He', 'Hf', 'Hg', 'Ho', 'Hs',
    'I', 'In', 'Ir',
    'K', 'Kr',
    'La', 'Li', 'Lr', 'Lu', 'Lv',
    'Mc', 'Md', 'Mg', 'Mn', 'Mo', 'Mt',
    'N', 'Na', 'Nb', 'Nd', 'Ne', 'Nh', 'Ni', 'No', 'Np',
    'O', 'Og', 'Os',
    'P', 'Pa', 'Pb', 'Pd', 'Pm', 'Po', 'Pr', 'Pt', 'Pu',
    'Ra', 'Rb', 'Re', 'Rf', 'Rg', 'Rh', 'Rn', 'Ru',
    'S', 'Sb', 'Sc', 'Se', 'Sg', 'Si', 'Sm', 'Sn', 'Sr',
    'Ta', 'Tb', 'Tc', 'Te', 'Th', 'Ti', 'Tl', 'Tm', 'Ts',
    'U',
    'V',
    'W',
    'Xe',
    'Y', 'Yb',
    'Zn', 'Zr'
];

class Solution {
    constructor(left, elements) {
        this.left = left;
        this.elements = elements;
    }
}

// const word = readline().toLowerCase();

class Result {
    constructor(element, left) {
        this.element = element;
        this.left = left;
    }
}

function generate2(word) {
    word = word.toLowerCase();
    let result = new Result('', word);
    for (const element of ELEMENTS) {
        if (word.startsWith(element.toLowerCase())) {
            if (element.length > result.element.length) {
                result = new Result(element, word.substring(element.length));
            }
        }
    }
    return result
}

function generate(word) {
    const stack = [];
    const solutions = [];
    stack.push(new Solution(word.toLowerCase(), []))

    while (stack.length) {
        const current = stack.pop();
        if (!current.left.length) {
            solutions.push(current);
            continue;
        }
        for (const element of ELEMENTS) {
            if (current.left.startsWith(element.toLowerCase())) {
                const left = current.left.substring(element.length);
                const next = new Solution(left, current.elements.concat([element]));
                stack.push(next);
            }
        }
    }

    if (solutions.length) {
        solutions.sort();
        solutions.reverse();
        for (const solution of solutions) {
            console.error(solution.elements);
            console.log(solution.elements.join(''));
        }
    } else {
        console.log('none');
    }
    return solutions;
}
