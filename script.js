let Motos_Seleccionadas = {};
let sonidoCorrecto;
let sonidoIncorrecto;

const Motos = [
    { marca: 'Zanella', modelo: 'ZB RT FULL', cilindrada: '110cc', Imagen: './assets/images/ZanellaZBRTFULL110.WEBP' },//👌
    { marca: 'Zanella', modelo: 'ZB LT BASE', cilindrada: '110cc', Imagen: './assets/images/ZanellaZBLTBASE110.WEBP' },//👌
    { marca: 'Zanella', modelo: 'ZB Turning', cilindrada: '125cc', Imagen: './assets/images/ZanellaZBRTurning125.WEBP' },//👌
    { marca: 'Zanella', modelo: 'DUE', cilindrada: '110cc', Imagen: './assets/images/ZanellaDUE110.WEBP' },//👌
    { marca: 'Zanella', modelo: 'HOT', cilindrada: '90cc', Imagen: './assets/images/ZanellaHOT90.WEBP' },//👌
    { marca: 'Zanella', modelo: 'ZB Z3 F', cilindrada: '110cc', Imagen: './assets/images/ZanellaZBZ3F110.WEBP' },//👌
    { marca: 'Zanella', modelo: 'ZT', cilindrada: '150cc', Imagen: './assets/images/ZanellaZT150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'ZR LT', cilindrada: '250cc', Imagen: './assets/images/ZanellaZRLT250.WEBP' },//👌
    { marca: 'Zanella', modelo: 'ZR OHC', cilindrada: '200cc', Imagen: './assets/images/ZanellaOHCT200.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Ceccato', cilindrada: '150cc', Imagen: './assets/images/ZanellaCeccatoR150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Sapucai FULL', cilindrada: '150cc', Imagen: './assets/images/ZanellaSapucaiFULL150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'RX R7 FULL', cilindrada: '150cc', Imagen: './assets/images/ZanellaRXZ7FULL150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Ceccato X', cilindrada: '250cc', Imagen: './assets/images/ZanellaCeccatoX250.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Ceccato Serie 60', cilindrada: '', Imagen: './assets/images/ZanellaCeccatoSerie60.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Patagonian Eagle ST', cilindrada: '150cc', Imagen: './assets/images/ZanellaPatagonianEagleST150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Cruiser X1', cilindrada: '170cc', Imagen: './assets/images/ZanellaCruiserX1170.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Styler Exclusive', cilindrada: '150cc', Imagen: './assets/images/ZanellaStylerExclusive150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Cruiser X', cilindrada: '150cc', Imagen: './assets/images/ZanellaCruiserX150.WEBP' },//👌
    { marca: 'Zanella', modelo: 'Exclusive', cilindrada: '150cc', Imagen: './assets/images/ZanellaExclusive150.png' },//👌
    { marca: 'Zanella', modelo: 'Styler RS', cilindrada: '150cc', Imagen: './assets/images/ZanellaStylerRS150.WEBP' },//👌


    { marca: 'Corven', modelo: 'TRIAX R3', cilindrada: '150cc', Imagen: './assets/images/CorvenTRIAXR3150.webp' },//
    { marca: 'Corven', modelo: 'TRIAX R1', cilindrada: '150cc', Imagen: './assets/images/CorvenTRIAXR1150.webp' },//
    { marca: 'Corven', modelo: 'TRIAX TXR L', cilindrada: '250cc', Imagen: './assets/images/CorvenTRIAXTXRL250.webp' },//
    { marca: 'Corven', modelo: 'TRIAX R3', cilindrada: '250cc', Imagen: './assets/images/CorvenTRIAXR3250.webp' },//
    { marca: 'Corven', modelo: 'TRIAX R3', cilindrada: '200cc', Imagen: './assets/images/CorvenTRIAXR3200.webp' },//
    { marca: 'Corven', modelo: 'TRIAX TXR X', cilindrada: '250cc', Imagen: './assets/images/CorvenTRIAXTXRX250.webp' },//
    { marca: 'Corven', modelo: 'Expert DOT', cilindrada: '150cc', Imagen: './assets/images/CorvenExpertDOT150.webp' },//
    { marca: 'Corven', modelo: 'Expert', cilindrada: '80cc', Imagen: './assets/images/CorvenExpert80.webp' },//
    { marca: 'Corven', modelo: 'Expert Milano', cilindrada: '150cc', Imagen: './assets/images/CorvenExpertMILANO150.webp' },//
    { marca: 'Corven', modelo: 'Hunter Full', cilindrada: '150cc', Imagen: './assets/images/CorvenHunteFULL150.webp' },//
    { marca: 'Corven', modelo: 'Hunter Base', cilindrada: '150cc', Imagen: './assets/images/CorvenHunterBASE150.webp' },//
    { marca: 'Corven', modelo: 'DX', cilindrada: '70cc', Imagen: './assets/images/CorvenDX70.webp' },//
    { marca: 'Corven', modelo: 'TRIAX Touring', cilindrada: '250cc', Imagen: './assets/images/CorvenTriaxTouring250.webp' },//
    { marca: 'Corven', modelo: 'Mirage AD Full', cilindrada: '110cc', Imagen: './assets/images/CorvenMirageADFull110.webp' },//
    { marca: 'Corven', modelo: 'Mirage RT Base', cilindrada: '110cc', Imagen: './assets/images/CorvenMirageRTBase110.webp' },//
    { marca: 'Corven', modelo: 'Energy R2 Base', cilindrada: '110cc', Imagen: './assets/images/CorvenEnergyR2BASE110.webp' },//
    { marca: 'Corven', modelo: 'Energy R2 Full', cilindrada: '110cc', Imagen: './assets/images/CorvenEnergyR2FULL110.webp' },//
    { marca: 'Corven', modelo: 'Energy Turning', cilindrada: '110cc', Imagen: './assets/images/CorvenEnergyTuning110.webp' },//




    { marca: 'Bajaj', modelo: 'Rouser', cilindrada: '200cc', Imagen: './assets/images/BajajRouser200.webp' },//👌
    { marca: 'Bajaj', modelo: 'BoxerAT', cilindrada: '150cc', Imagen: './assets/images/BajajBoxerAT150.webp' },//👌
    { marca: 'Bajaj', modelo: 'Dominar', cilindrada: '400cc', Imagen: './assets/images/BajajDominar400.webp' },//👌
    { marca: 'Bajaj', modelo: 'Avenger', cilindrada: '220cc', Imagen: './assets/images/BajajAvenger220.webp' },//👌
    { marca: 'Bajaj', modelo: 'V15 ', cilindrada: '', Imagen: './assets/images/BajajV15.png' },


    { marca: 'Mondial', modelo: 'MD', cilindrada: '150cc', Imagen: './assets/images/MondialMD150.WEBP' },//👌
    { marca: 'Mondial', modelo: 'Alegro', cilindrada: '150cc', Imagen: './assets/images/MondialAlegro150.webp' },
    { marca: 'Mondial', modelo: 'Max', cilindrada: '110cc', Imagen: './assets/images/MONDIALMAX110.webp' },
    { marca: 'Mondial', modelo: 'DAX', cilindrada: '70cc', Imagen: './assets/images/MondialDAX70.webp' },
    { marca: 'Mondial', modelo: 'RD Calle Base', cilindrada: '150cc', Imagen: './assets/images/MondialRD150.webp' },
    { marca: 'Mondial', modelo: 'Racer W', cilindrada: '150cc', Imagen: './assets/images/MondialRacerW150.webp' },
    { marca: 'Mondial', modelo: 'RD Classic', cilindrada: '150cc', Imagen: './assets/images/MONDIALRD150CLASSIC.webp' },
    { marca: 'Mondial', modelo: 'RD Full', cilindrada: '150cc', Imagen: './assets/images/MONDIALRDFULL150.webp' },
    { marca: 'Mondial', modelo: 'LD MAX RT Base', cilindrada: '110cc', Imagen: './assets/images/MondialLDMAXRTBase110.webp' },
    { marca: 'Mondial', modelo: 'LD S', cilindrada: '110cc', Imagen: './assets/images/MONDIALLDS110.webp' },
    { marca: 'Mondial', modelo: 'TD Enduro', cilindrada: '150cc', Imagen: './assets/images/MondialTDEnduro150.webp' },
    { marca: 'Mondial', modelo: 'TD', cilindrada: '250cc', Imagen: './assets/images/MONDIALTD250.webp' },
    { marca: 'Mondial', modelo: 'HD Custom', cilindrada: '250cc', Imagen: './assets/images/MondialHDCUSTOM250.webp' },
    { marca: 'Mondial', modelo: 'HD Custom', cilindrada: '150cc', Imagen: './assets/images/MondialHDCUSTOM150.webp' },
    { marca: 'Mondial', modelo: 'RV Arenera', cilindrada: '125cc', Imagen: './assets/images/MondialRVArenera125.webp' },

    //{ marca: 'Suzuki', modelo: 'GN', cilindrada: '125cc', Imagen: './assets/images/SuzukiGN125.jpg' },//
    //{ marca: 'Gilera', modelo: 'Smash', cilindrada: '110cc', Imagen: './assets/images/GileraSmash110.jpg' },//
    //{ marca: 'Yamaha', modelo: 'YBR', cilindrada: '125cc', Imagen: './assets/images/YamahaYBR125.jpg' },
    //{ marca: 'Cerro', modelo: 'CE', cilindrada: '110cc', Imagen: './assets/images/CerroCE110.jpg' },
    //{ marca: 'Benelli', modelo: 'TNT', cilindrada: '15', Imagen: './assets/images/BenelliTNT15.jpg' },//
];

const btns = [
    document.getElementById('btn_opcion1'),
    document.getElementById('btn_opcion2'),
    document.getElementById('btn_opcion3'),
    document.getElementById('btn_opcion4')
];

const overlay = document.getElementById('overlay');
const btnComenzar = document.getElementById('btnComenzar');

function habilitarSonidos() {
    sonidoCorrecto = new Audio('./assets/sound/op_correcta.mp3');
    sonidoIncorrecto = new Audio('./assets/sound/op_incorrecta.mp3');
    sonidoCorrecto.play().then(() => sonidoCorrecto.pause());
    sonidoIncorrecto.play().then(() => sonidoIncorrecto.pause());
}

function seleccionarMotosAleatorias(motos, cantidad) {
    const MotosSeleccionadas = {};
    const motosMezcladas = [...motos].sort(() => 0.5 - Math.random());
    const seleccionadas = motosMezcladas.slice(0, cantidad);
    const indiceCorrecta = Math.floor(Math.random() * cantidad);
    seleccionadas.forEach((moto, index) => {
        MotosSeleccionadas[index] = {
            ...moto,
            correcta: index === indiceCorrecta
        };
    });
    return MotosSeleccionadas;
}

function cargarOpciones() {
    Motos_Seleccionadas = seleccionarMotosAleatorias(Motos, 4);
    const imagenMoto = document.querySelector('.imagen-moto');
    const correcta = Object.values(Motos_Seleccionadas).find(m => m.correcta);
    imagenMoto.src = correcta.Imagen;

    Object.keys(Motos_Seleccionadas).forEach((key, index) => {
        const moto = Motos_Seleccionadas[key];
        const texto = `${moto.marca} ${moto.modelo} ${moto.cilindrada}`;
        const btn = btns[index];

        btn.textContent = texto;
        btn.classList.remove('op_correcta', 'op_false');
        btn.disabled = false;

        btn.onclick = () => {
            if (moto.correcta) {
                btn.classList.add('op_correcta');
                sonidoCorrecto?.play();
            } else {
                btn.classList.add('op_false');
                sonidoIncorrecto?.play();
            }

            btns.forEach(b => b.disabled = true);

            setTimeout(() => {
                cargarOpciones();
            }, 1500);
        };
    });
}

btnComenzar.addEventListener('click', () => {
    habilitarSonidos();
    overlay.style.display = 'none';
});

window.onload = cargarOpciones;
