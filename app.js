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
  
  PERIODIC_TABLE = {
    "H": {
      "name": "Hydrogen"
    },
    "He": {
      "name": "Helium"
    },
    "Li": {
      "name": "Lithium"
    },
    "Be": {
      "name": "Beryllium"
    },
    "B": {
      "name": "Boron"
    },
    "C": {
      "name": "Carbon"
    },
    "N": {
      "name": "Nitrogen"
    },
    "O": {
      "name": "Oxygen"
    },
    "F": {
      "name": "Fluorine"
    },
    "Ne": {
      "name": "Neon"
    },
    "Na": {
      "name": "Sodium"
    },
    "Mg": {
      "name": "Magnesium"
    },
    "Al": {
      "name": "Aluminium"
    },
    "Si": {
      "name": "Silicon"
    },
    "P": {
      "name": "Phosphorus"
    },
    "S": {
      "name": "Sulfur"
    },
    "Cl": {
      "name": "Chlorine"
    },
    "Ar": {
      "name": "Argon"
    },
    "K": {
      "name": "Potassium"
    },
    "Ca": {
      "name": "Calcium"
    },
    "Sc": {
      "name": "Scandium"
    },
    "Ti": {
      "name": "Titanium"
    },
    "V": {
      "name": "Vanadium"
    },
    "Cr": {
      "name": "Chromium"
    },
    "Mn": {
      "name": "Manganese"
    },
    "Fe": {
      "name": "Iron"
    },
    "Co": {
      "name": "Cobalt"
    },
    "Ni": {
      "name": "Nickel"
    },
    "Cu": {
      "name": "Copper"
    },
    "Zn": {
      "name": "Zinc"
    },
    "Ga": {
      "name": "Gallium"
    },
    "Ge": {
      "name": "Germanium"
    },
    "As": {
      "name": "Arsenic"
    },
    "Se": {
      "name": "Selenium"
    },
    "Br": {
      "name": "Bromine"
    },
    "Kr": {
      "name": "Krypton"
    },
    "Rb": {
      "name": "Rubidium"
    },
    "Sr": {
      "name": "Strontium"
    },
    "Y": {
      "name": "Yttrium"
    },
    "Zr": {
      "name": "Zirconium"
    },
    "Nb": {
      "name": "Niobium"
    },
    "Mo": {
      "name": "Molybdenum"
    },
    "Tc": {
      "name": "Technetium"
    },
    "Ru": {
      "name": "Ruthenium"
    },
    "Rh": {
      "name": "Rhodium"
    },
    "Pd": {
      "name": "Palladium"
    },
    "Ag": {
      "name": "Silver"
    },
    "Cd": {
      "name": "Cadmium"
    },
    "In": {
      "name": "Indium"
    },
    "Sn": {
      "name": "Tin"
    },
    "Sb": {
      "name": "Antimony"
    },
    "Te": {
      "name": "Tellurium"
    },
    "I": {
      "name": "Iodine"
    },
    "Xe": {
      "name": "Xenon"
    },
    "Cs": {
      "name": "Cesium"
    },
    "Ba": {
      "name": "Barium"
    },
    "La": {
      "name": "Lanthanum"
    },
    "Ce": {
      "name": "Cerium"
    },
    "Pr": {
      "name": "Praseodymium"
    },
    "Nd": {
      "name": "Neodymium"
    },
    "Pm": {
      "name": "Promethium"
    },
    "Sm": {
      "name": "Samarium"
    },
    "Eu": {
      "name": "Europium"
    },
    "Gd": {
      "name": "Gadolinium"
    },
    "Tb": {
      "name": "Terbium"
    },
    "Dy": {
      "name": "Dysprosium"
    },
    "Ho": {
      "name": "Holmium"
    },
    "Er": {
      "name": "Erbium"
    },
    "Tm": {
      "name": "Thulium"
    },
    "Yb": {
      "name": "Ytterbium"
    },
    "Lu": {
      "name": "Lutetium"
    },
    "Hf": {
      "name": "Hafnium"
    },
    "Ta": {
      "name": "Tantalum"
    },
    "W": {
      "name": "Tungsten"
    },
    "Re": {
      "name": "Rhenium"
    },
    "Os": {
      "name": "Osmium"
    },
    "Ir": {
      "name": "Iridium"
    },
    "Pt": {
      "name": "Platinum"
    },
    "Au": {
      "name": "Gold"
    },
    "Hg": {
      "name": "Mercury"
    },
    "Tl": {
      "name": "Thallium"
    },
    "Pb": {
      "name": "Lead"
    },
    "Bi": {
      "name": "Bismuth"
    },
    "Po": {
      "name": "Polonium"
    },
    "At": {
      "name": "Astatine"
    },
    "Rn": {
      "name": "Radon"
    },
    "Fr": {
      "name": "Francium"
    },
    "Ra": {
      "name": "Radium"
    },
    "Ac": {
      "name": "Actinium"
    },
    "Th": {
      "name": "Thorium"
    },
    "Pa": {
      "name": "Protactinium"
    },
    "U": {
      "name": "Uranium"
    },
    "Np": {
      "name": "Neptunium"
    },
    "Pu": {
      "name": "Plutonium"
    },
    "Am": {
      "name": "Americium"
    },
    "Cm": {
      "name": "Curium"
    },
    "Bk": {
      "name": "Berkelium"
    },
    "Cf": {
      "name": "Californium"
    },
    "Es": {
      "name": "Einsteinium"
    },
    "Fm": {
      "name": "Fermium"
    },
    "Md": {
      "name": "Mendelevium"
    },
    "No": {
      "name": "Nobelium"
    },
    "Lr": {
      "name": "Lawrencium"
    },
    "Rf": {
      "name": "Rutherfordium"
    },
    "Db": {
      "name": "Dubnium"
    },
    "Sg": {
      "name": "Seaborgium"
    },
    "Bh": {
      "name": "Bohrium"
    },
    "Hs": {
      "name": "Hassium"
    },
    "Mt": {
      "name": "Meitnerium"
    },
    "Ds": {
      "name": "Darmstadtium"
    },
    "Rg": {
      "name": "Roentgenium"
    },
    "Cn": {
      "name": "Copernicium"
    },
    "Nh": {
      "name": "Nihonium"
    },
    "Fl": {
      "name": "Flerovium"
    },
    "Mc": {
      "name": "Moscovium"
    },
    "Lv": {
      "name": "Livermorium"
    },
    "Ts": {
      "name": "Tennessine"
    },
    "Og": {
      "name": "Oganesson"
    },
    "Uue": {
      "name": "Ununennium"
    }
  }
  
  class Solution {
    constructor(left, elements) {
      this.left = left;
      this.elements = elements;
    }
  }
  
  // const word = readline().toLowerCase();
  
  class Result {
    constructor(element, left, name) {
      this.element = element;
      this.name = name;
      this.left = left;
    }
  }
  
  function generate2(word) {
    word = word.toLowerCase();
    let result = new Result('', word);
    for (const element of Object.keys(PERIODIC_TABLE)) {
      if (word.startsWith(element.toLowerCase())) {
        if (element.length > result.element.length) {
          result = new Result(element, word.substring(element.length), PERIODIC_TABLE[element].name);
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
  