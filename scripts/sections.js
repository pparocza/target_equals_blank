const coolProgression2 = () => {

    const fund = 2*randomFloat(160, 180);
    const gainVal = 0.25;

    const pA =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7', 'pitch9' , 'pitch10', 'pitch12' , 'pitch13', 'pitch20'
    ];

    const pAHigh1 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch12' , 'pitch13' , 'pitch20'
    ];

    const pALow1 =  [ 
        'pitch23' , 'pitch27' , 'pitch20'
    ];

    const c1A = [1, M2, P4, 1/m3, M6];
    const c1B = [1/M2/P4, 1, M2]; 
    const c1C = [1, M2, M3, P5];
    const c1D = [1, M2, M3, P5, M6];

    const chordArray = [ c1B , c1C , c1D ]; // c1D , c1C* , c1A , c1B

    const chordIdx = randomInt( 0 , chordArray.length );
    const currentChord = chordArray[ chordIdx ];

    const div = randomInt( 5 , 11 );
    const rate = randomFloat( 0.2 , 0.3 );
    const endTime = div * 14;

    console.log(`fund: ${fund} , chord: ${chordIdx} , div ${div} , rate: ${rate} , end time: ${endTime}`);
    // fund: 339.961843388973 , chord: 1 , div 8 , rate: 0.23251616525007013 , end time: 112
    // fund: 344.7732229376423 , chord: 2 , div 8 , rate: 0.2775900235619053 , end time: 112
    // fund: 347.704524373619 , chord: 3 , div 6 , rate: 0.2812388782494855 , end time: 84
    // fund: 342.86548026406024 , chord: 3 , div 8 , rate: 0.23113541705481946 , end time: 112
    // fund: 338.5899437510577 , chord: 1 , div 8 , rate: 0.20915176806359595 , end time: 112
    // fund: 326.30622815558075 , chord: 3 , div 6 , rate: 0.280832522611688 , end time: 84
    // fund: 351.00854974083495 , chord: 1 , div 7 , rate: 0.2218077534454225 , end time: 98
    // fund: 358.208078526564 , chord: 2 , div 5 , rate: 0.2345177730841897 , end time: 70

    // startTime, stopTime, bufferLength, rate, spliceDiv, fund, cArray, pArray, gainVal

    pitchedPresetSequenceSpliceDelay( div*0 , div*4 ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*0 , div*6 ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*1 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div * 0.5  ,  fund  ,  currentChord , pAHigh1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*2 , div*9 ,  2 , 0.25 ,  3 ,     fund*0.25  , currentChord , pALow1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*3 , endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  div * randomArrayValue( [ 0.25 ] ) ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*4 , endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  div * randomArrayValue( [ 0.25 ] ) ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*5 , endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  div * randomArrayValue( [ 0.25 ] ) ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*4 , div*9 ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*5 , div*9 ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*6 , div*9 ,  randomFloat( 1 , 2 ) , rate ,  div * 2 ,  fund * 2  ,  currentChord , pA , gainVal * 0.5 );

    pitchedPresetSequenceSpliceDelay( div*7 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div * 0.33 ,  fund ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*7 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div * 0.33 ,  fund ,  currentChord , pAHigh1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*8 , endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  div * randomArrayValue( [ 0.25 ] ) ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*8 , endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  div * randomArrayValue( [ 0.25 ] ) ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*8 , endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  div * randomArrayValue( [ 0.25 ] ) ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*9 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div * 2 ,  fund * 2  ,  currentChord , pA , gainVal * 0.5 );
    pitchedPresetSequenceSpliceDelay( div*9 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*9 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*9 , endTime ,  2 , 0.25 ,  3 ,     fund*0.25  , currentChord , pALow1 , gainVal );

    pitchedPresetSequenceSpliceDelay( div*10 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*11 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div ,  fund  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSpliceDelay( div*12 , endTime ,  randomFloat( 1 , 2 ) , rate ,  div * 2 ,  fund * 2  ,  currentChord , pA , gainVal * 0.5 );
    

}
