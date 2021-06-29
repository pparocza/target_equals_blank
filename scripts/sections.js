const pitchedPresetSpliceSection = () => {

    pitchedPresetSpliceTest(0,  16, 9, 0.5*400/m2/P5, 
        [
            'pitch35', 'pitch29', 'pitch7', 'pitch9', 'pitch60'
        ], 
    1);

    // pitchedPresetSpliceTest(2,  48, 5, 0.5*400/m2/P5, 'pitch35', 32);

    // pitchedPresetSpliceTest(8,  48, 20, 1*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(16, 48, 5, 0.5*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(24, 48, 3, 2*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(28, 48, 4, 2*400/m2/P5, 'pitch36', 32);
    // pitchedPresetSpliceTest(36, 48, 8, 1*400/m2/P5, 'pitch36', 32);

}

const percussionPresetSpliceSection = () => {

    // percussionPresetSpliceTest(0, 48, 10,   ['perc15'], 0.25);
    // percussionPresetSpliceTest(8, 48, 5 ,   ['perc15'], 0.25);
    // percussionPresetSpliceTest(8, 48, 7 ,   ['perc17'], 0.25);
    // percussionPresetSpliceTest(16, 48, 14 , ['perc10'], 0.25);

    percussionPresetSpliceTest(0, 48, 7, 
        [
            'perc30', 'perc32'
        ], 
    1);

}

const fxPresetSpliceSection = () => {

    fxPresetSpliceTest(0, 48, 10, ['fx22', 'fx28', 'fx30'], 0.25);

}

const mixedPresetSpliceSection = () => {

    mixedPresetSpliceTest(
        0, 48, 10, 0.5*400/m2/P5,
        ['pitch35'],
        ['perc30'],
        ['fx22'], 
        0.25
    );

}