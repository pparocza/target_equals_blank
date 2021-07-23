const coolProgression2 = () => {

    const fund = 2*randomFloat(160, 180) // 170.66666666666666;
    console.log(fund);

    const gainVal = 0.25;

    // 'pitch20' is a really nice 'house organ' type of thing that works really 
    // well here
    const pA =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7', 'pitch9' , 'pitch10', 'pitch12' , 'pitch13', 'pitch20'
    ];

    const pAHigh1 =  [ 
        'pitch23' , 'pitch27' , 'pitch1' , 'pitch12' , 'pitch13' , 'pitch20'
    ];

    const c1 = [1, M2];

    const c1A = [1, M2, P4, 1/m3, M6];
    const c1B = [1/M2/P4, 1, M2]; 
    const c1C = [1, M2, M3, P5]

    const c2 = [1/M2, M2];

    const c3 = [1/M2/M6, 1, m3];

    const currentChord = c1C; // c1A , c1B

    // startTime, stopTime, bufferLength, rate, spliceDiv, fund, cArray, pArray, gainVal

    //
    pitchedPresetSequenceSplice( 0 , 64 ,  2 , randomFloat(0.125, 0.25) ,  randomInt( 8 , 12 )  ,   fund      ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSplice( 0 , 64 ,  2 , randomFloat(0.125, 0.25) ,  randomInt( 18 , 22 ) ,   fund      ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSplice( 0 , 64 ,  2 , randomFloat(0.125, 0.25) ,  randomFloat( 2 , 8 )   ,   fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSplice( 0 , 64 ,  2 , randomFloat(0.125, 0.25) ,  2.5 ,                      fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    pitchedPresetSequenceSplice( 0 , 64 ,  2 , randomFloat(0.125, 0.25) ,  randomFloat( 2 , 7 ) ,     fund*0.5  ,  currentChord , pAHigh1 , gainVal );
    
    pitchedPresetSequenceSplice( 16 , 64 ,  2 , 0.25 ,  3 ,     fund*0.25  ,      currentChord , pAHigh1 , gainVal );

}
