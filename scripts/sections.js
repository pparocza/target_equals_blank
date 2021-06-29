const pitchedPresetSpliceSection = () => {

    pitchedPresetSpliceTest(0,  48, 10, 1*400/m2/P5, 'pitch36');
    
    // pitchedPresetSpliceTest(2,  48, 10, 1*400/m2/P5, 'pitch35');

    pitchedPresetSpliceTest(8,  48, 20, 1*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(16, 48, 5, 0.5*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(24, 48, 3, 2*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(28, 48, 4, 2*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(36, 48, 8, 1*400/m2/P5, 'pitch36');

    pitchedPresetSpliceTest(48, 48+48, 10, (1/M2)*1*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(48, 48+48, 20, (1/M2)*1*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(48, 48+48, 5,  (1/M2)*0.5*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(48, 48+48, 3,  (1/M2)*2*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(48, 48+48, 4,  (1/M2)*2*400/m2/P5, 'pitch36');
    pitchedPresetSpliceTest(48, 48+48, 8,  (1/M2)*1*400/m2/P5, 'pitch36');

}

const percussionPresetSpliceSection = () => {

    percussionPresetSpliceTest(0, 48, 10,   'perc15', 64);
    percussionPresetSpliceTest(8, 48, 5 ,   'perc15', 64);
    percussionPresetSpliceTest(8, 48, 7 ,   'perc17', 64);
    percussionPresetSpliceTest(16, 48, 14 , 'perc10', 4);

}