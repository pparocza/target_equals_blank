var masterGain;
var fadeFilter;
var offlineBuffer;
var globalNow;

setTimeout(function(){bufferLoaded();}, 1000);

function bufferLoaded(){

	const gain = audioCtx.createGain();
	gain.gain.value = 1;

	const c = new MyConvolver(2, 2, audioCtx.sampleRate);
	const cB = new MyBuffer2(2, 2, audioCtx.sampleRate);
	cB.noise().fill();
	cB.ramp(0, 1, 0.01, 0.015, 0.5, 4).multiply();

	c.setBuffer( cB.buffer );
	c.output.gain.value = 0;

	var d = new Effect();
	d.stereoDelay(0.5, 0.5, 0.1, 1);
	d.on();
	d.output.gain.value = 0;

	fadeFilter = new FilterFade(0);

	masterGain = audioCtx.createGain();

	masterGain.connect(gain);
	masterGain.connect(c.input);
	masterGain.connect(d.input);

	c.connect(gain);
	d.connect(gain);
	gain.connect(fadeFilter.input);
	fadeFilter.connect(audioCtx.destination);

	// INITIALIZATIONS

	if(onlineButton.innerHTML == "online"){
		setTimeout(function(){onlineBufferLoaded();}, 1000);
	}

	else if(onlineButton.innerHTML == "offline"){
		offlineBufferLoaded();
	}

}

//--------------------------------------------------------------

function runPatch(){

		fadeFilter.start(1, 50);
		globalNow = audioCtx.currentTime;

		// pitchedPresetSpliceSection();
		// percussionPresetSpliceSection();
		fxPresetSpliceSection();

}

//--------------------------------------------------------------

function stopPatch(){

	var now = audioCtx.currentTime;
	fadeFilter.start(0, 20);
	setTimeout(function(){masterGain.disconnect();}, 100);
	startButton.innerHTML = "reset";

	if(onlineButton.innerHTML=="offline"){
		offlineBuffer.stop();
	}

}

//--------------------------------------------------------------

function onlineBufferLoaded(){

	startButton.disabled = false;
	startButton.innerHTML = "start";

}

//--------------------------------------------------------------

function offlineBufferLoaded(){

	runPatch();

	audioCtx.startRendering().then(function(renderedBuffer){

		offlineBuffer = onlineCtx.createBufferSource();
		offlineBuffer.buffer = renderedBuffer

		startButton.disabled = false;
		startButton.innerHTML = "start";

		offlineBuffer.connect(onlineCtx.destination);

	})

}
