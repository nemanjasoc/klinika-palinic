import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            autoklaviImages: [
                {
                    img: 'promitech11.jpg',
                    title: 'Vertikalni cilindrični',
                    text: 'Dimezije radnog prostora:',
                    text1: 'PS 3050V prečnik 300, visina 500 mm.',
                    text2: 'PS 4060V prečnik 400, visina 600 mm.'
                },
                {
                    img: 'promitech21.jpg'
                },
                {
                    img: 'promitech31.jpg'
                },
                {
                    img: 'autoklav-ekspresni-1.jpg',
                    title: 'Ekspresni horizontalni',
                    text: 'Dimezije radnog prostora:',
                    text1: 'prečnik 210 dubina 430 mm;',
                    text2: 'prečnik 250 dubina 450 mm.'
                },
                {
                    img: 'autoklav-ekspresni-2.jpg'
                }
            ],
            suviSterilizatoriImages: [
                {
                    img: 'suvi-sterilizator1.jpg',
                    text: 'Suvi sterilizator'
                },
                {
                    img: 'SA-MIKRIPROCESORSKOM-KONTROLOM-TEMPERATURE-PROGRAMIRANJEM-RADA-MALA.jpg',
                    text: 'Suvi sterilizator'
                }
            ],
            dobosiKasetePosudeImages: [
                {
                    img: 'dobosi-za-sterilizaciju-dimenzija1-150x150.jpg',
                    text: 'Doboši za sterilizaciju dimenzija:', 
                    firstDimension: '140 x 140 mm.',
                    secondDimension: '190 x 160 mm.',
                    thirdDimension: '190 x 190 mm.',
                    fourthDimension: '240 x 160 mm.',
                    fifthDimension: '240 x 240 mm.'
                },
                {
                    img: 'kasete-za-instrumente-dimenzija1-150x150.jpg',
                    text: 'Kasete za instrumente dimenzija:',
                    firstDimension: '180 x 80 x 40 mm.',
                    secondDimension: '200 x 100 x 60 mm.',
                    thirdDimension: '250 x 120 x 60 mm',
                    fourthDimension: '320 x 150 x 50 mm.',
                    fifthDimension: '350 x 175 x 75 mm.'
                },
                {
                    img: 'tacne-za-instrumente-sa-poklopcem-dimenzija1.jpg',
                    text: 'Tacne za instrumente sa poklopcem dimenzija:',
                    firstDimension: '220 x 130 x 45 mm.',
                    secondDimension: '265 x 170 x 47 mm.',
                    thirdDimension: '306 x 196 x 50 mm.',
                    fourthDimension: '355 x 254 x 50 mm.'
                },
                {
                    img: 'bubreznjak-duzine1-150x99.jpg',
                    text: 'Bubrežnjak dužine: 210 i 250 mm.'
                },
                {
                    img: 'posuda-okrugla-precnika-150x150.jpg',
                    text: 'Posuda okrugla prečnika: 80, 100 i 120 mm.'
                }
            ],
            instrumentiOstaliImages: [
                {
                    img: 'klješta-za-gips-po-stille-u1.jpg',
                    text: 'Klješta za gips po Stille-u'
                },
                {
                    img: 'kljesta-za-intubaciju-po-Magill-u1.jpg',
                    text: 'Klješta za intubaciju po Magill-u'
                },
                {
                    img: 'spekulum-rektalni-trokraki-po-Mathieu-u.jpg',
                    text: 'Spekulum rektalni trokraki po Mathieu-u'
                },
                {
                    img: 'anoskop-po-Hirschmann-u.jpg',
                    text: 'Anoskop po Hirschmann-u'
                },
                {
                    img: 'spekulum-rektalni-dvokraki-po-Sims-u.jpg',
                    text: 'Spekulum rektalni dvokraki po Sims-u'
                }
            ],
            instrumentiZaGinekologijuImages: [
                {
                    img: 'spekulum-vaginalni-cusco2.jpg',
                    text: 'Spekulum vaginalni Cusco.',
                    secondText: 'Tri standardne veličine.'
                },
                {
                    img: 'spekulum-vaginalni-cusco-virgo2.jpg',
                    text: 'Spekulum vaginalni Cusco Virgo.',
                    secondText: 'Veličine 75x17mm.'
                },
                {
                    img: 'ekarter-po-kristeller-u.jpg',
                    text: 'Ekarter po Kristeller-u.',
                    secondText: 'Tri standarne veličine.'
                },
                {
                    img: 'dilatator-po-hegar-u-jednostrani1.jpg',
                    text: 'Dilatator po Hegar-u jednostrani.',
                    secondText: 'Prečnika od 3 do 13mm.'
                },
                {
                    img: 'sonda-za-aspiraciju-po-novak-u.jpg',
                    text: 'Sonda za aspiraciju po Novak-u'
                },
                {
                    img: 'kireta-za-uterus-širine-glave-od-6-do-15-mm.jpg',
                    text: 'Kireta za uterus.',
                    secondText: 'Širine glave od 6 do 15 mm.'
                },
                {
                    img: 'kireta-za-uterum-po-bumm-u.jpg',
                    text: 'Kireta za uterum po Bumm-u.'
                },
                {
                    img: 'klješta-kukasta-po-schroder-u-i-pozz-u.jpg',
                    text: 'Klješta kukasta po Schroder-u i Pozz-u.'
                },
                {
                    img: 'Sonda-za-uterus-po-Sims-u.jpg',
                    text: 'Sonda za uterus po Sims-u.'
                },
                {
                    img: 'klješta-za-tampone-po-forster-u-od-24-cm.jpg',
                    text: 'Klješta za tampone po Forster-u od 24 cm.',
                    secondText: 'Prava ili savijena.'
                },
                {
                    img: 'klješta-za-abortus-po-saenger-u.jpg',
                    text: 'Klješta za abortus po Saenger-u.',
                    secondText: 'Širina glave 11mm.'
                },
                {
                    img: 'klješta-za-biopsiju-po-schubert-u.jpg',
                    text: 'Klješta za biopsiju po Schubert-u.'
                },
                {
                    img: 'klješta-za-biopsiju-po-faure-u-od-23-cm.jpg',
                    text: 'Klješta za biopsiju po Faure-u od 23 cm.'
                },
                {
                    img: 'makaze-za-epiziotomiju.jpg',
                    text: 'Makaze za epiziotomiju.'
                },
                {
                    img: 'pelvimetar-po-martin-u-od-34-cm.jpg',
                    text: 'Pelvimetar po Martin-u od 34 cm.'
                }
            ],
            instrumentiZaUhoGrloNosImages: [
                {
                    img: 'levak-ušni-po-hartmann-u-za-decu1.jpg',
                    text: 'Levak ušni po Hartmann-u za decu',
                    secondText: 'Garnitura od po 3 komada'
                },
                {
                    img: 'levak-ušni-po-hartmann-u-za-odrasle1.jpg',
                    text: 'Levak ušni po Hartmann-u za odrasle',
                    secondText: 'Garnitura od po 3 komada'
                },
                {
                    img: 'spric-za-ispiranje-metalni1.jpg',
                    text: 'Špric za ispiranje metalni'
                },
                {
                    img: 'spric-za-ispiranje-stakleni1.jpg',
                    text: 'Špric za ispiranje stakleni'
                },
                {
                    img: 'eza-usna-po-Billeau-u.jpg',
                    text: 'Eza ušna po Billeau-u.'
                },
                {
                    img: 'nosac-vate-po-Farell-u.jpg',
                    text: 'Nosač vate po Farell-u'
                },
                {
                    img: 'kireta-usna-po-Buck-u.jpg',
                    text: 'Kireta ušna po Buck-u'
                },
                {
                    img: 'kljesta-za-polipe-po-Hartmann-u.jpg',
                    text: 'Klješta za polipe po Hartmann-u',
                    secondText: 'Dužine: 16, 18 i 20 cm'
                },
                {
                    img: 'spekulum-za-nos-po-Hartmann-u.jpg',
                    text: 'Spekulum za nos po Hartmann-u'
                },
                {
                    img: 'spekulum-za-nos-po-Hartmann-u-deciji.jpg',
                    text: 'Spekulum za nos po Hartmann-u dečiji'
                },
                {
                    img: 'ogledalo-za-grlo.jpg',
                    text: 'Ogledalo za grlo Prečnika od 14 do 24 mm'
                },
                {
                    img: 'drzac-ogledala-za-grlo.jpg',
                    text: 'drzac ogledala za grlo',
                    secondText: ''
                },
                {
                    img: 'pinceta-za-nos-po-Jansen-u.jpg',
                    text: 'Pinceta za nos po Jansen-u od 16 cm'
                },
                {
                    img: 'pinceta-usna-savijena.jpg',
                    text: 'Pinceta ušna savijena od 12 cm'
                },
                {
                    img: 'kanila-aspiraciona-po-Frazier-u.jpg',
                    text: 'Kanila aspiraciona po Frazier-u'
                },
                {
                    img: 'kanila-aspiraciona-po-Rosen-u.jpg',
                    text: 'Kanila aspiraciona po Rosen-u'
                }
            ],
            makazeHirurskeImages: [
                {
                    img: 'prave-tupo-tupe1.jpg',
                    text: 'Prave tupo-tupe'
                },
                {
                    img: 'prave-tupo-šiljate1.jpg',
                    text: 'Prave tupo-šiljate'
                },
                {
                    img: 'prave-šiljato-šiljate1.jpg',
                    text: 'Prave šiljato-šiljate'
                },
                {
                    img: 'savijene-tupo-tupe.jpg',
                    text: 'Savijene tupo-tupe'
                },
                {
                    img: 'savijene-tupo-šiljate.jpg',
                    text: 'Savijene tupo-šiljate'
                },
                {
                    img: 'savijene-šiljato-šiljate.jpg',
                    text: 'Savijene šiljato-šiljate'
                }
            ],
            makazeZaPrepariranjeImages: [
                {
                    img: 'prave.jpg',
                    text: 'Prave'
                },
                {
                    img: 'savijene.jpg',
                    text: 'Savijene'
                }
            ],
            makazeZaIrisImages: [
                {
                    img: 'makaze_iris.jpg',
                    text: 'Prave'
                },
                {
                    img: 'makaze_iris-krive.jpg',
                    text: 'Krive'
                }
            ],
            makazeZaSkidanjeKonacaImages: [
                {
                    img: 'po-spencer-u1.jpg',
                    text: 'Po Spencer-u'
                }
            ],
            makazeZaGazuImages: [
                {
                    img: 'po-lister-u.jpg',
                    text: 'Po Lister-u',
                    secondText: 'Dužine 16; 18 i 20 cm'
                },
                {
                    img: 'po-smith-u.jpg',
                    text: 'Po Smith-u',
                    secondText: 'Dužine 16; 18 i 20 cm'
                },
                {
                    img: 'univerzalne.jpg',
                    text: 'Univerzalne',
                    secondText: 'Dužine 16; 18 i 20 cm'
                }
            ],
            hvataliceImages: [
                {
                    img: 'pean-sve.jpg',
                    text: 'Pean',
                    secondText: 'Dužine od 14,16,18,20 i 22 cm'
                },
                {
                    img: 'kocher-sve.jpg',
                    text: 'Kocher',
                    secondText: 'Dužine od 14,16,18,20 i 22 cm'
                },
                {
                    img: 'halstead-mosquito-sve.jpg',
                    text: 'Halstead-Mosquito',
                    secondText: 'Dužine 12,5 i 14 cm'
                },
                {
                    img: 'za-gumena-ili-PVC-creva-nenazubljena1.jpg',
                    text: 'Za gumena ili PVC creva nenazubljena',
                    secondText: 'Duzine 12,5 i 14 cm'
                },
                {
                    img: 'za-rublje-BACKHAUS1.jpg',
                    text: 'Za rublje-BACKHAUS',
                    secondText: 'Dužine 11 cm'
                }
            ],
            pinceteImages: [
                {
                    img: 'anatomska-150x150.jpg',
                    text: 'Anatomska sa standardnim i finim vrhom',
                    secondText: 'Dužine: 11,5; 14,5; 16; 18 i 20 cm'
                },
                {
                    img: 'hirurška-150x150.jpg',
                    text: 'Hirurška sa standardnim i finim vrhom',
                    secondText: 'Dužine: 11,5; 14,5; 16; 18 i 20 cm'
                },
                {
                    img: 'adson-anatomske-i-hirurške-150x150.jpg',
                    text: 'Adson anatomske i hirurške',
                    secondText: 'Dužine 12 cm'
                },
                {
                    img: 'douglas-za-depilaciju-150x150.jpg',
                    text: 'Douglas za depilaciju',
                    secondText: 'Duzine 9 cm'
                },
                {
                    img: 'pinceta-ušna-savijena-150x150.jpg',
                    text: 'Pinceta ušna savijena',
                    secondText: 'Dužine 12 cm'
                },
                {
                    img: 'pinceta-za-nos-po-jansen-u.jpg',
                    text: 'Pinceta za nos po Jansen-u od',
                    secondText: 'Dužine 16 cm'
                }
            ],
            iglodrzaciImages: [
                {
                    img: 'mathieu.jpg',
                    text: 'Mathieu',
                    secondText: 'Dužine 17 cm'
                },
                {
                    img: 'mayo-hegar.jpg',
                    text: 'Mayo-Hegar',
                    secondText: 'Dužine od 16 do 24 cm'
                }
            ],
            cekicNeuroloskiImages: [
                {
                    img: 'neuroloski-cekic-11.jpg',
                    text: 'DEJERINE'
                },
                {
                    img: 'neuroloski-cekic-2-BUCK1.jpg',
                    text: 'BUCK'
                }
            ],
            kireteImages: [
                {
                    img: 'kiret-po-volkmanu-.jpg',
                    text: 'Za kosti po VOLKMANN-u'
                },
                {
                    img: 'dvostrana-po-WILLIGER-u.jpg',
                    text: 'Dvostrana po WILLIGER-u',
                    secondText: 'Dužina 13,5 cm'
                }
            ],
            drzaciSkalpelaImages: [
                {
                    img: 'standard-broj-3.jpg',
                    text: 'Standard broj 3'
                },
                {
                    img: 'standard-broj-4.jpg',
                    text: 'Standard broj 4',
                },
                {
                    img: 'dugi-model-broj-3.jpg',
                    text: 'Dugi model broj 3'
                },
                {
                    img: 'dugi-model-broj-4.jpg',
                    text: 'Dugi model broj 4',
                }
            ],
            skalpelNoziciImages: [
                {
                    img: 'za-držač-skalpela-broj-3.jpg',
                    text: 'Za držač skalpela broj 3'
                },
                {
                    img: 'za-držač-skalpela-broj-4.jpg',
                    text: 'Za držač skalpela broj 4',
                }
            ]
        },
        getters: {
            autoklaviImages: function (state) {
                return state.autoklaviImages;
            },
            suviSterilizatoriImages: function (state) {
                return state.suviSterilizatoriImages;
            },
            dobosiKasetePosudeImages: function (state) {
                return state.dobosiKasetePosudeImages;
            },
            instrumentiOstaliImages: function (state) {
                return state.instrumentiOstaliImages;
            },
            instrumentiZaGinekologijuImages: function (state) {
                return state.instrumentiZaGinekologijuImages;
            },
            instrumentiZaUhoGrloNosImages: function (state) {
                return state.instrumentiZaUhoGrloNosImages;
            },
            makazeHirurskeImages: function (state) {
                return state.makazeHirurskeImages;
            },
            makazeZaPrepariranjeImages: function (state) {
                return state.makazeZaPrepariranjeImages;
            },
            makazeZaIrisImages: function (state) {
                return state.makazeZaIrisImages;
            },
            makazeZaSkidanjeKonacaImages: function (state) {
                return state.makazeZaSkidanjeKonacaImages;
            },
            makazeZaGazuImages: function (state) {
                return state.makazeZaGazuImages;
            },
            hvataliceImages: function (state) {
                return state.hvataliceImages;
            },
            pinceteImages: function (state) {
                return state.pinceteImages;
            },
            iglodrzaciImages: function (state) {
                return state.iglodrzaciImages;
            },
            cekicNeuroloskiImages: function (state) {
                return state.cekicNeuroloskiImages;
            },
            kireteImages: function (state) {
                return state.kireteImages;
            },
            drzaciSkalpelaImages: function (state) {
                return state.drzaciSkalpelaImages;
            },
            skalpelNoziciImages: function (state) {
                return state.skalpelNoziciImages;
            }
        }
    });
};

export default createStore;
