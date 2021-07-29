class Piece {
    constructor(){
     
        this.fund = 2*randomFloat(160, 180);
        this.gainVal = 0.25;
    
        this.pA =  [ 
            'pitch23' , 'pitch27' , 'pitch1' , 'pitch3' , 'pitch7', 'pitch9' , 'pitch10', 'pitch12' , 'pitch13', 'pitch20'
        ];
    
        this.pAHigh1 =  [ 
            'pitch23' , 'pitch27' , 'pitch1' , 'pitch12' , 'pitch13' , 'pitch20'
        ];
    
        this.pALow1 =  [ 
            'pitch23' , 'pitch27' , 'pitch20'
        ];
    
        this.c1A = [1, M2, P4, 1/m3, M6];
        this.c1B = [1/M2/P4, 1, M2]; 
        this.c1C = [1, M2, M3, P5];
        this.c1D = [1, M2, M3, P5, M6];
    
        this.chordArray = [ this.c1B , this.c1C , this.c1D ]; // c1D , c1C* , c1A , c1B
    
        this.chordIdx = randomInt( 0 , this.chordArray.length );
        this.currentChord = this.chordArray[ this.chordIdx ];
    
        this.div = randomInt( 5 , 11 );
        this.rate = randomFloat( 0.2 , 0.3 );
        this.endTime = this.div * 14;
        this.pL = 1/this.rate;
        
    }

    start(){

        this.coolProgression2A();

    }

    coolProgression2(){

        console.log(`fund: ${this.fund} , chord: ${this.chordIdx} , div ${this.div} , this.rate: ${this.rate} , end time: ${this.endTime}`);

        pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*4 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*6 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*1 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.5  ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*2 , this.div*9 ,  2 , 0.25 ,  3 ,     this.fund * 0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*3 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  2 , 0.25 ,  4 /* 3 */ ,     this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*10 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*11 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*12 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );

    }

    coolProgression2A(){

        console.log(`fund: ${this.fund} , chord: ${this.chordIdx} , div ${this.div} , this.rate: ${this.rate} , end time: ${this.endTime}`);

        // fund: 321.90993509639503 , chord: 2 , div 10 , this.rate: 0.2047596119357182 , end time: 140
        // fund: 348.7297948494201 , chord: 0 , div 9 , this.rate: 0.23331114908119638 , end time: 126
        // fund: 328.22318374685204 , chord: 0 , div 9 , this.rate: 0.2190200424713958 , end time: 126
        // fund: 336.1230164008747 , chord: 2 , div 8 , this.rate: 0.29172782378539674 , end time: 112

        pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*4 , randomFloat( 1 , 2 ) , this.rate , this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*4 , randomFloat( 1 , 2 ) , this.rate , this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*1 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.5  ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*2 , this.div*5 ,  2 , 0.25 ,  3 ,     this.fund * 0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*3 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.div*4.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.div*5.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*6.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.div*7.25 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );

        pitchedPresetSequenceSpliceDelay( this.div*5 , this.div*9 ,  2 , 0.25 ,  4 /* 3 */ ,     this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*8 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*8 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.div*9.25 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
       
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  2 , 0.25 ,  3 /* 3 */ ,     this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );
      
        // pitchedPresetSequenceSpliceDelay( this.div*10 , this.div*10.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        // pitchedPresetSequenceSpliceDelay( this.div*11 , this.div*11.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*10 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*11 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*12 , this.div*12.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*13 , this.div*13.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );

    }

    coolProgression3() {

        console.log(`fund: ${this.fund} , chord: ${this.chordIdx} , div ${this.div} , this.rate: ${this.rate} , end time: ${this.endTime}`);
        // fund: 339.961843388973 , chord: 1 , div 8 , this.rate: 0.23251616525007013 , end time: 112
        // fund: 344.7732229376423 , chord: 2 , div 8 , this.rate: 0.2775900235619053 , end time: 112
        // fund: 347.704524373619 , chord: 3 , div 6 , this.rate: 0.2812388782494855 , end time: 84
        // fund: 342.86548026406024 , chord: 3 , div 8 , this.rate: 0.23113541705481946 , end time: 112
        // fund: 338.5899437510577 , chord: 1 , div 8 , this.rate: 0.20915176806359595 , end time: 112
        // fund: 326.30622815558075 , chord: 3 , div 6 , this.rate: 0.280832522611688 , end time: 84
        // fund: 351.00854974083495 , chord: 1 , div 7 , this.rate: 0.2218077534454225 , end time: 98
        // fund: 358.208078526564 , chord: 2 , div 5 , this.rate: 0.2345177730841897 , end time: 70
        // fund: 330.99116122596007 , chord: 1 , div 7 , this.rate: 0.2883277430912772 , end time: 98
        // fund: 327.3874142476063 , chord: 0 , div 10 , this.rate: 0.24158624221449512 , end time: 140
        // fund: 337.0035869677449 , chord: 0 , div 10 , this.rate: 0.209981129050708 , end time: 140
        // fund: 355.0096903066589 , chord: 2 , div 8 , this.rate: 0.20885708495119337 , end time: 112
        // fund: 358.44289481792623 , chord: 0 , div 7 , this.rate: 0.2751849957610972 , end time: 98

        // fund: 352.85146324654676 , chord: 0 , div 10 , this.rate: 0.20823747865969422 , end time: 140
        // fund: 331.2111000644676 , chord: 1 , div 8 , this.rate: 0.21759951351427148 , end time: 112
        // fund: 346.8188060277894 , chord: 2 , div 6 , this.rate: 0.2755631144233801 , end time: 84
        // fund: 325.92851156917993 , chord: 1 , div 6 , this.rate: 0.28712742996967433 , end time: 84
        // fund: 322.0613065986342 , chord: 0 , div 8 , this.rate: 0.23979519217312423 , end time: 112
        // fund: 328.4809833012296 , chord: 1 , div 5 , this.rate: 0.2985535682656162 , end time: 70
        // fund: 348.20907444038005 , chord: 1 , div 6 , this.rate: 0.20655764555792372 , end time: 84
        // fund: 322.39903957193206 , chord: 2 , div 8 , this.rate: 0.20583632497271198 , end time: 112

        //** fund: 338.2179712916993 , chord: 0 , div 5 , this.rate: 0.2136136233150536 , end time: 70
        // fund: 348.046162275124 , chord: 2 , div 8 , this.rate: 0.21454709793645715 , end time: 112
        //** fund: 321.4040028744096 , chord: 0 , div 8 , this.rate: 0.2948969774293887 , end time: 112
        //** fund: 332.85539400252475 , chord: 2 , div 6 , this.rate: 0.26165531015665605 , end time: 84

        // fund: 358.13701365414903 , chord: 1 , div 8 , this.rate: 0.22362286793850505 , end time: 112
        // fund: 323.22319251198235 , chord: 0 , div 5 , this.rate: 0.26506867303287424 , end time: 70
        // fund: 342.7903017253608 , chord: 0 , div 6 , this.rate: 0.25501638130006793 , end time: 84
    
        // startTime, stopTime, bufferLength, this.rate, spliceDiv, fund, cArray, pArray, gainVal
    
        // pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*4 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        // pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*6 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*0 , this.div*1.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*0.5 , this.div*2.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*2 , this.div*3 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*2.5 , this.div*4.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*3 , this.div*4 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.div*6 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*1 , this.div*3 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.5  ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*2 , this.div*6 ,  2 , 0.25 ,  3 ,     this.fund * 0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*3 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pALow1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pALow1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*7.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*7 ,  2 , 0.25 ,  4 , this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*7 , this.div*7.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*7.5 , this.div*8 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.div*12,  2 , 0.25 ,  3 ,  this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.div*9.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*10 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*11 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*12 , this.endTime ,  2 , 0.25 ,  4 ,     this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*12 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );

    }

    coolProgression4() {

        console.log(`fund: ${this.fund} , chord: ${this.chordIdx} , div ${this.div} , this.rate: ${this.rate} , end time: ${this.endTime}`);

        pitchedPresetSequenceSpliceDelay( 0 , this.pL * 1.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.pL * 1.5 , this.pL * 5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.pL * 3 , this.pL * 4.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        /*
        pitchedPresetSequenceSpliceDelay( this.div*0.5 , this.div*2.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*2 , this.div*3 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*2.5 , this.div*4.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*3 , this.div*4 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.div*6 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*1 , this.div*3 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.5  ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*2 , this.div*6 ,  2 , 0.25 ,  3 ,     this.fund * 0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*3 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * 0.25 ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*4 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*5 , this.div*9 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*6.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*6 , this.div*7 ,  2 , 0.25 ,  4 , this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*7 , this.div*7.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*7.5 , this.div*8 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 0.33 ,  this.fund ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*7 , this.div*12,  2 , 0.25 ,  3 ,  this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*8 , this.endTime ,  randomFloat( 1 , 2 ) , randomFloat( 0.5 , 1.5 ) ,  this.div * randomArrayValue( [ 0.25 ] ) ,   this.fund*0.5  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.div*9.5 ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*9 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        
        pitchedPresetSequenceSpliceDelay( this.div*10 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*11 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div ,  this.fund  ,  this.currentChord , this.pAHigh1 , this.gainVal );

        pitchedPresetSequenceSpliceDelay( this.div*12 , this.endTime ,  2 , 0.25 ,  4 ,     this.fund*0.25  , this.currentChord , this.pALow1 , this.gainVal );
        pitchedPresetSequenceSpliceDelay( this.div*12 , this.endTime ,  randomFloat( 1 , 2 ) , this.rate ,  this.div * 2 ,  this.fund * 2  ,  this.currentChord , this.pA , this.gainVal * 0.5 );
        */
        
    }

}
