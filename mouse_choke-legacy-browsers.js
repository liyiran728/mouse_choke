/******************** 
 * Mouse_Choke Test *
 ********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'mouse_choke';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr1RoutineBegin());
flowScheduler.add(instr1RoutineEachFrame());
flowScheduler.add(instr1RoutineEnd());
flowScheduler.add(instr2RoutineBegin());
flowScheduler.add(instr2RoutineEachFrame());
flowScheduler.add(instr2RoutineEnd());
flowScheduler.add(instr3RoutineBegin());
flowScheduler.add(instr3RoutineEachFrame());
flowScheduler.add(instr3RoutineEnd());
flowScheduler.add(instr4RoutineBegin());
flowScheduler.add(instr4RoutineEachFrame());
flowScheduler.add(instr4RoutineEnd());
flowScheduler.add(instr5RoutineBegin());
flowScheduler.add(instr5RoutineEachFrame());
flowScheduler.add(instr5RoutineEnd());
flowScheduler.add(questionRoutineBegin());
flowScheduler.add(questionRoutineEachFrame());
flowScheduler.add(questionRoutineEnd());
flowScheduler.add(instr6RoutineBegin());
flowScheduler.add(instr6RoutineEachFrame());
flowScheduler.add(instr6RoutineEnd());
const trainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trainingLoopBegin, trainingLoopScheduler);
flowScheduler.add(trainingLoopScheduler);
flowScheduler.add(trainingLoopEnd);
flowScheduler.add(EndTrainingRoutineBegin());
flowScheduler.add(EndTrainingRoutineEachFrame());
flowScheduler.add(EndTrainingRoutineEnd());
flowScheduler.add(instr_colorpointsRoutineBegin());
flowScheduler.add(instr_colorpointsRoutineEachFrame());
flowScheduler.add(instr_colorpointsRoutineEnd());
flowScheduler.add(break_warningRoutineBegin());
flowScheduler.add(break_warningRoutineEachFrame());
flowScheduler.add(break_warningRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(outcomesRoutineBegin());
flowScheduler.add(outcomesRoutineEachFrame());
flowScheduler.add(outcomesRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'chooseBlock.xlsx', 'path': 'chooseBlock.xlsx'},
    {'name': 'block1.xlsx', 'path': 'block1.xlsx'},
    {'name': 'block5.xlsx', 'path': 'block5.xlsx'},
    {'name': 'block3.xlsx', 'path': 'block3.xlsx'},
    {'name': 'block4.xlsx', 'path': 'block4.xlsx'},
    {'name': 'block2.xlsx', 'path': 'block2.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=8334F312', '');

  return Scheduler.Event.NEXT;
}


var instr1Clock;
var thisExp;
var randint;
var asarray;
var targetColor;
var outcome;
var wingame;
var inaccurate;
var falseStart;
var startPosTimer;
var delayTimer;
var reachTimer;
var winTimer;
var timeoutTimer;
var rtTimer;
var distanceFromTarget;
var distanceFromTargetX;
var distanceFromTargetY;
var distanceFromStart;
var targetsize;
var wincount;
var totalpoints;
var mousex;
var mousey;
var colorint;
var jackpotcolor;
var fifteencolor;
var fivecolor;
var twentycolor;
var tencolor;
var instr_1;
var key_resp_instr_1;
var instr2Clock;
var centercircle_instr;
var key_resp_instr_2;
var instr_2;
var spacebarinstr;
var instr3Clock;
var centercircle_instr2;
var targetcircleinstr;
var instr_3;
var key_resp_instr_3;
var spacebarinstr_2;
var instr4Clock;
var targetcircleinstr_2;
var instr_4;
var key_resp_instr_4;
var spacebarinstr_3;
var instr5Clock;
var targetcircleinstr_3;
var instr_5;
var key_resp_instr_5;
var spacebarinstr_4;
var dot_instr;
var questionClock;
var question_text;
var slider;
var question_key_resp;
var instr6Clock;
var key_resp_instr_6;
var instr_6;
var centerMousetrainingClock;
var timeout_text_t;
var centercircle_t;
var centermouse_t;
var centerinstr_t;
var testtrialnum;
var testtrialtext_1;
var startpositiontrainingClock;
var startPos_t_wait;
var mouse_t_wait;
var target_t_wait;
var testtrialtext_2;
var trialtrainingClock;
var invis_startPos_t;
var mouse_t_reach;
var target_t_reach;
var testtrialtext_3;
var feedbacktrainingClock;
var outcome_t;
var target_t_outcome;
var mousepos_t;
var testtrialtext_4;
var EndTrainingClock;
var endResp_t;
var endInstr_t;
var instr_colorpointsClock;
var startInstr_e;
var startResp_e;
var polygon1;
var polygon2;
var polygon3;
var polygon4;
var polygon5;
var polygon1Points;
var polygon2Points;
var polygon3Points;
var polygon4Points;
var polygon5Points;
var break_warningClock;
var key_resp_break_warning;
var text_break_warning;
var centerMouseClock;
var timeout_text_e;
var centercircle;
var centermouse_e;
var centerInstr_e;
var startpositionClock;
var startPos_e_wait;
var target_e_wait;
var mouse_e_wait;
var targetPoints_e_wait;
var spPoints_e_wait;
var trialClock;
var invis_startPos_e;
var mouse_e_reach;
var target_e_reach;
var targetPoints_e_reach;
var feedbackClock;
var outcome_e;
var target_e_outcome;
var targetPoints_e_reach_2;
var mousepos_e;
var blockbreakClock;
var blockbreaktext;
var timeout_text_break;
var index;
var blockpoints;
var key_resp_blockbreak;
var outcomesClock;
var endOutcome_e;
var endResp_e;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instr1"
  instr1Clock = new util.Clock();
  thisExp = psychoJS.experiment;
  
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  asarray=function(something) {
    return something;
  }
  
  targetColor = "white";
  outcome = " ";
  wingame = false;
  inaccurate = false;
  falseStart = false;
  
  startPosTimer = new util.Clock();
  delayTimer = new util.Clock();
  reachTimer = new util.Clock();
  winTimer = new util.Clock();
  timeoutTimer = new util.Clock();
  rtTimer = new util.Clock();
  
  distanceFromTarget = 0;
  distanceFromTargetX = 0;
  distanceFromTargetY = 0;
  distanceFromStart = 0;
  
  targetsize = 0.1;
  wincount = 0;
  totalpoints = 0;
  mousex = 0;
  mousey = 0;
  colorint = randint(1, 6);
  if ((colorint === 1)) {
      jackpotcolor = "yellow";
      fifteencolor = "white";
      fivecolor = "red";
      twentycolor = "dodgerblue";
      tencolor = "orange";
  } else {
      if ((colorint === 2)) {
          twentycolor = "yellow";
          tencolor = "white";
          jackpotcolor = "red";
          fifteencolor = "dodgerblue";
          fivecolor = "orange";
      } else {
          if ((colorint === 3)) {
              fifteencolor = "yellow";
              fivecolor = "white";
              twentycolor = "red";
              tencolor = "dodgerblue";
              jackpotcolor = "orange";
          } else {
              if ((colorint === 4)) {
                  tencolor = "yellow";
                  jackpotcolor = "white";
                  fifteencolor = "red";
                  fivecolor = "dodgerblue";
                  twentycolor = "orange";
              } else {
                  fivecolor = "yellow";
                  twentycolor = "white";
                  tencolor = "red";
                  jackpotcolor = "dodgerblue";
                  fifteencolor = "orange";
              }
          }
      }
  }
  thisExp.addData("colormapping", ((((((((fivecolor + ",") + tencolor) + ",") + fifteencolor) + ",") + twentycolor) + ",") + jackpotcolor));
  
  instr_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_1',
    text: "In this experiment, you will be making reaching movements with your mouse/trackpad to try to earn cash bonuses.  You'll first spend 5 minutes training on the task and then you will do 5 blocks of 120 trials trying to earn rewards. \n\n\nPress the space bar to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_instr_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr2"
  instr2Clock = new util.Clock();
  centercircle_instr = new visual.Polygon ({
    win: psychoJS.window, name: 'centercircle_instr', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  key_resp_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_2',
    text: 'Every trial will begin with a white circle at the center of the screen. After you click this circle, you will see a color change. After a short delay, a colored target circle will appear either to the left or to the right. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  spacebarinstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebarinstr',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instr3"
  instr3Clock = new util.Clock();
  centercircle_instr2 = new visual.Polygon ({
    win: psychoJS.window, name: 'centercircle_instr2', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  targetcircleinstr = new visual.Polygon ({
    win: psychoJS.window, name: 'targetcircleinstr', 
    edges: 128, size:[0.1, 0.1],
    ori: 0.0, pos: [(- 0.65), 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  instr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_3',
    text: 'As soon as the center circle disappears, you should move your cursor to the target circle.  There will be a time limit, so you will need to move quickly. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_instr_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  spacebarinstr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebarinstr_2',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "instr4"
  instr4Clock = new util.Clock();
  targetcircleinstr_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'targetcircleinstr_2', 
    edges: 128, size:[0.1, 0.1],
    ori: 0.0, pos: [(- 0.65), 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  instr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_4',
    text: "After you reach the target circle, you need to hold the cursor there until the end of the trial. If the cursor moves out of the circle before the trial ends, that will count as a 'miss'.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_instr_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  spacebarinstr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebarinstr_3',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instr5"
  instr5Clock = new util.Clock();
  targetcircleinstr_3 = new visual.Polygon ({
    win: psychoJS.window, name: 'targetcircleinstr_3', 
    edges: 128, size:[0.1, 0.1],
    ori: 0.0, pos: [(- 0.65), 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  instr_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_5',
    text: 'At the end of each trial, you will receive feedback on your performance, including a black dot representing your mouse position at the end of the trial. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_instr_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  spacebarinstr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebarinstr_4',
    text: 'Press the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  dot_instr = new visual.Polygon ({
    win: psychoJS.window, name: 'dot_instr', 
    edges: 128, size:[0.01, 0.01],
    ori: 0.0, pos: [(- 0.62), 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "question"
  questionClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: 'Which of the following are you using to do the experiment? \nChoose one or the other: far left - mouse, far right - trackpad\nPlease use your choice throughout the experiment\n\n\n\n\n\n\n\nPress the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [0.8, 0.1], pos: [0, 0], units: 'height',
    labels: ["Mouse", "Trackpad"], ticks: [1, 2],
    granularity: 0.0, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color('White'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  question_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr6"
  instr6Clock = new util.Clock();
  key_resp_instr_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_6',
    text: 'We will now begin with the training section that will prepare you for the experiment. \n\nPlease stay focused during the process. If you spend too long on the center circle screen, the experiment will terminate, and your entry will be rejected.\n\nPress the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "centerMousetraining"
  centerMousetrainingClock = new util.Clock();
  timeout_text_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'timeout_text_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: 0.0 
  });
  
  centercircle_t = new visual.Polygon ({
    win: psychoJS.window, name: 'centercircle_t', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  centermouse_t = new core.Mouse({
    win: psychoJS.window,
  });
  centermouse_t.mouseClock = new util.Clock();
  centerinstr_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'centerinstr_t',
    text: 'Click the circle to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  testtrialnum = 1;
  
  testtrialtext_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'testtrialtext_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "startpositiontraining"
  startpositiontrainingClock = new util.Clock();
  startPos_t_wait = new visual.Polygon ({
    win: psychoJS.window, name: 'startPos_t_wait', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_t_wait = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_t_wait.mouseClock = new util.Clock();
  target_t_wait = new visual.Polygon ({
    win: psychoJS.window, name: 'target_t_wait', 
    edges: 128, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  testtrialtext_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'testtrialtext_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "trialtraining"
  trialtrainingClock = new util.Clock();
  invis_startPos_t = new visual.Polygon ({
    win: psychoJS.window, name: 'invis_startPos_t', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('grey'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  mouse_t_reach = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_t_reach.mouseClock = new util.Clock();
  target_t_reach = new visual.Polygon ({
    win: psychoJS.window, name: 'target_t_reach', 
    edges: 128, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('green'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  testtrialtext_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'testtrialtext_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedbacktraining"
  feedbacktrainingClock = new util.Clock();
  outcome_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  target_t_outcome = new visual.Polygon ({
    win: psychoJS.window, name: 'target_t_outcome', 
    edges: 128, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mousepos_t = new visual.Polygon ({
    win: psychoJS.window, name: 'mousepos_t', 
    edges: 128, size:[0.01, 0.01],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  testtrialtext_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'testtrialtext_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "EndTraining"
  EndTrainingClock = new util.Clock();
  endResp_t = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  endInstr_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'endInstr_t',
    text: 'Great job!  \n\nWe will now begin the reward section of the experiment where you can earn cash bonuses.  On each trial, the targets will be worth a different number of points that you can earn by successfully completing that trial.\n\nPress the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instr_colorpoints"
  instr_colorpointsClock = new util.Clock();
  startInstr_e = new visual.TextStim({
    win: psychoJS.window,
    name: 'startInstr_e',
    text: 'The point value will be displayed both in the center circle at the start of the trial and in the target itself.  The point value on each trial can be either 5, 10, 15, 20, or 100.\nEach reward value is associated with a certain color. \n\nBelow are examples of the colors you will \nsee. \nPress the space bar to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  startResp_e = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon1 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon1', 
    edges: 128, size:[0.1, 0.1],
    ori: 0, pos: [(- 0.3), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color(fivecolor),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  polygon2 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon2', 
    edges: 128, size:[0.1, 0.1],
    ori: 0, pos: [(- 0.15), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color(tencolor),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  polygon3 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon3', 
    edges: 128, size:[0.1, 0.1],
    ori: 0, pos: [0, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color(fifteencolor),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  polygon4 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon4', 
    edges: 128, size:[0.1, 0.1],
    ori: 0, pos: [0.15, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color(twentycolor),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  polygon5 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon5', 
    edges: 128, size:[0.1, 0.1],
    ori: 0, pos: [0.3, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color(jackpotcolor),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  polygon1Points = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon1Points',
    text: '5',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  polygon2Points = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon2Points',
    text: '10',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.15), (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  polygon3Points = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon3Points',
    text: '15',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  polygon4Points = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon4Points',
    text: '20',
    font: 'Arial',
    units: undefined, 
    pos: [0.15, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  polygon5Points = new visual.TextStim({
    win: psychoJS.window,
    name: 'polygon5Points',
    text: '100',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -11.0 
  });
  
  // Initialize components for Routine "break_warning"
  break_warningClock = new util.Clock();
  key_resp_break_warning = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_break_warning = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_break_warning',
    text: 'The experiment contains 5 blocks with 120 trials each. \n\nIn-between blocks you may take a short break (2 minutes). If you take long breaks during the experiment, the experiment will terminate, and your entry will be rejected.\n\nPress the space bar when you are ready to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "centerMouse"
  centerMouseClock = new util.Clock();
  timeout_text_e = new visual.TextStim({
    win: psychoJS.window,
    name: 'timeout_text_e',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: 0.0 
  });
  
  centercircle = new visual.Polygon ({
    win: psychoJS.window, name: 'centercircle', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  centermouse_e = new core.Mouse({
    win: psychoJS.window,
  });
  centermouse_e.mouseClock = new util.Clock();
  centerInstr_e = new visual.TextStim({
    win: psychoJS.window,
    name: 'centerInstr_e',
    text: 'Click the circle to begin',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "startposition"
  startpositionClock = new util.Clock();
  startPos_e_wait = new visual.Polygon ({
    win: psychoJS.window, name: 'startPos_e_wait', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  target_e_wait = new visual.Polygon ({
    win: psychoJS.window, name: 'target_e_wait', 
    edges: 128, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  mouse_e_wait = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_e_wait.mouseClock = new util.Clock();
  targetPoints_e_wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetPoints_e_wait',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  spPoints_e_wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'spPoints_e_wait',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -6.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  invis_startPos_e = new visual.Polygon ({
    win: psychoJS.window, name: 'invis_startPos_e', 
    edges: 128, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('grey'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  mouse_e_reach = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_e_reach.mouseClock = new util.Clock();
  target_e_reach = new visual.Polygon ({
    win: psychoJS.window, name: 'target_e_reach', 
    edges: 128, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  targetPoints_e_reach = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetPoints_e_reach',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  outcome_e = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_e',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  target_e_outcome = new visual.Polygon ({
    win: psychoJS.window, name: 'target_e_outcome', 
    edges: 128, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  targetPoints_e_reach_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetPoints_e_reach_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  mousepos_e = new visual.Polygon ({
    win: psychoJS.window, name: 'mousepos_e', 
    edges: 128, size:[0.01, 0.01],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "blockbreak"
  blockbreakClock = new util.Clock();
  blockbreaktext = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockbreaktext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  timeout_text_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'timeout_text_break',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: -1.0 
  });
  
  index = 0;
  blockpoints = 0;
  
  key_resp_blockbreak = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "outcomes"
  outcomesClock = new util.Clock();
  endOutcome_e = new visual.TextStim({
    win: psychoJS.window,
    name: 'endOutcome_e',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  endResp_e = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_instr_1_allKeys;
var instr1Components;
function instr1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr1'-------
    t = 0;
    instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr_1.keys = undefined;
    key_resp_instr_1.rt = undefined;
    _key_resp_instr_1_allKeys = [];
    // keep track of which components have finished
    instr1Components = [];
    instr1Components.push(instr_1);
    instr1Components.push(key_resp_instr_1);
    
    instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr1'-------
    // get current time
    t = instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_1* updates
    if (t >= 0.0 && instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_1.tStart = t;  // (not accounting for frame time here)
      instr_1.frameNStart = frameN;  // exact frame index
      
      instr_1.setAutoDraw(true);
    }

    
    // *key_resp_instr_1* updates
    if (t >= 0.0 && key_resp_instr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_1.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instr_1.clock.reset();
      key_resp_instr_1.start();
    }

    if (key_resp_instr_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_1_allKeys = _key_resp_instr_1_allKeys.concat(theseKeys);
      if (_key_resp_instr_1_allKeys.length > 0) {
        key_resp_instr_1.keys = _key_resp_instr_1_allKeys[_key_resp_instr_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_1.rt = _key_resp_instr_1_allKeys[_key_resp_instr_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr1'-------
    instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr_2_allKeys;
var instr2Components;
function instr2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr2'-------
    t = 0;
    instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr_2.keys = undefined;
    key_resp_instr_2.rt = undefined;
    _key_resp_instr_2_allKeys = [];
    // keep track of which components have finished
    instr2Components = [];
    instr2Components.push(centercircle_instr);
    instr2Components.push(key_resp_instr_2);
    instr2Components.push(instr_2);
    instr2Components.push(spacebarinstr);
    
    instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr2'-------
    // get current time
    t = instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *centercircle_instr* updates
    if (t >= 0.0 && centercircle_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centercircle_instr.tStart = t;  // (not accounting for frame time here)
      centercircle_instr.frameNStart = frameN;  // exact frame index
      
      centercircle_instr.setAutoDraw(true);
    }

    
    // *key_resp_instr_2* updates
    if (t >= 0.0 && key_resp_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_2.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instr_2.clock.reset();
      key_resp_instr_2.start();
    }

    if (key_resp_instr_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_2_allKeys = _key_resp_instr_2_allKeys.concat(theseKeys);
      if (_key_resp_instr_2_allKeys.length > 0) {
        key_resp_instr_2.keys = _key_resp_instr_2_allKeys[_key_resp_instr_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_2.rt = _key_resp_instr_2_allKeys[_key_resp_instr_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_2* updates
    if (t >= 0.0 && instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2.tStart = t;  // (not accounting for frame time here)
      instr_2.frameNStart = frameN;  // exact frame index
      
      instr_2.setAutoDraw(true);
    }

    
    // *spacebarinstr* updates
    if (t >= 0.0 && spacebarinstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebarinstr.tStart = t;  // (not accounting for frame time here)
      spacebarinstr.frameNStart = frameN;  // exact frame index
      
      spacebarinstr.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr2'-------
    instr2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr_3_allKeys;
var instr3Components;
function instr3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr3'-------
    t = 0;
    instr3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr_3.keys = undefined;
    key_resp_instr_3.rt = undefined;
    _key_resp_instr_3_allKeys = [];
    // keep track of which components have finished
    instr3Components = [];
    instr3Components.push(centercircle_instr2);
    instr3Components.push(targetcircleinstr);
    instr3Components.push(instr_3);
    instr3Components.push(key_resp_instr_3);
    instr3Components.push(spacebarinstr_2);
    
    instr3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instr3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr3'-------
    // get current time
    t = instr3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *centercircle_instr2* updates
    if (t >= 0.0 && centercircle_instr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centercircle_instr2.tStart = t;  // (not accounting for frame time here)
      centercircle_instr2.frameNStart = frameN;  // exact frame index
      
      centercircle_instr2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (centercircle_instr2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      centercircle_instr2.setAutoDraw(false);
    }
    
    // *targetcircleinstr* updates
    if (t >= 0.0 && targetcircleinstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetcircleinstr.tStart = t;  // (not accounting for frame time here)
      targetcircleinstr.frameNStart = frameN;  // exact frame index
      
      targetcircleinstr.setAutoDraw(true);
    }

    
    // *instr_3* updates
    if (t >= 0.0 && instr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3.tStart = t;  // (not accounting for frame time here)
      instr_3.frameNStart = frameN;  // exact frame index
      
      instr_3.setAutoDraw(true);
    }

    
    // *key_resp_instr_3* updates
    if (t >= 0.0 && key_resp_instr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_3.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_3.start(); }); // start on screen flip
    }

    if (key_resp_instr_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_3_allKeys = _key_resp_instr_3_allKeys.concat(theseKeys);
      if (_key_resp_instr_3_allKeys.length > 0) {
        key_resp_instr_3.keys = _key_resp_instr_3_allKeys[_key_resp_instr_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_3.rt = _key_resp_instr_3_allKeys[_key_resp_instr_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *spacebarinstr_2* updates
    if (t >= 0.0 && spacebarinstr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebarinstr_2.tStart = t;  // (not accounting for frame time here)
      spacebarinstr_2.frameNStart = frameN;  // exact frame index
      
      spacebarinstr_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr3'-------
    instr3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr_4_allKeys;
var instr4Components;
function instr4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr4'-------
    t = 0;
    instr4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr_4.keys = undefined;
    key_resp_instr_4.rt = undefined;
    _key_resp_instr_4_allKeys = [];
    // keep track of which components have finished
    instr4Components = [];
    instr4Components.push(targetcircleinstr_2);
    instr4Components.push(instr_4);
    instr4Components.push(key_resp_instr_4);
    instr4Components.push(spacebarinstr_3);
    
    instr4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr4'-------
    // get current time
    t = instr4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *targetcircleinstr_2* updates
    if (t >= 0.0 && targetcircleinstr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetcircleinstr_2.tStart = t;  // (not accounting for frame time here)
      targetcircleinstr_2.frameNStart = frameN;  // exact frame index
      
      targetcircleinstr_2.setAutoDraw(true);
    }

    
    // *instr_4* updates
    if (t >= 0.0 && instr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_4.tStart = t;  // (not accounting for frame time here)
      instr_4.frameNStart = frameN;  // exact frame index
      
      instr_4.setAutoDraw(true);
    }

    
    // *key_resp_instr_4* updates
    if (t >= 0.0 && key_resp_instr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_4.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_4.clearEvents(); });
    }

    if (key_resp_instr_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_4_allKeys = _key_resp_instr_4_allKeys.concat(theseKeys);
      if (_key_resp_instr_4_allKeys.length > 0) {
        key_resp_instr_4.keys = _key_resp_instr_4_allKeys[_key_resp_instr_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_4.rt = _key_resp_instr_4_allKeys[_key_resp_instr_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *spacebarinstr_3* updates
    if (t >= 0.0 && spacebarinstr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebarinstr_3.tStart = t;  // (not accounting for frame time here)
      spacebarinstr_3.frameNStart = frameN;  // exact frame index
      
      spacebarinstr_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr4'-------
    instr4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr_5_allKeys;
var instr5Components;
function instr5RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr5'-------
    t = 0;
    instr5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr_5.keys = undefined;
    key_resp_instr_5.rt = undefined;
    _key_resp_instr_5_allKeys = [];
    // keep track of which components have finished
    instr5Components = [];
    instr5Components.push(targetcircleinstr_3);
    instr5Components.push(instr_5);
    instr5Components.push(key_resp_instr_5);
    instr5Components.push(spacebarinstr_4);
    instr5Components.push(dot_instr);
    
    instr5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr5RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr5'-------
    // get current time
    t = instr5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *targetcircleinstr_3* updates
    if (t >= 0.0 && targetcircleinstr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetcircleinstr_3.tStart = t;  // (not accounting for frame time here)
      targetcircleinstr_3.frameNStart = frameN;  // exact frame index
      
      targetcircleinstr_3.setAutoDraw(true);
    }

    
    // *instr_5* updates
    if (t >= 0.0 && instr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_5.tStart = t;  // (not accounting for frame time here)
      instr_5.frameNStart = frameN;  // exact frame index
      
      instr_5.setAutoDraw(true);
    }

    
    // *key_resp_instr_5* updates
    if (t >= 0.0 && key_resp_instr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_5.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_5.clearEvents(); });
    }

    if (key_resp_instr_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_5_allKeys = _key_resp_instr_5_allKeys.concat(theseKeys);
      if (_key_resp_instr_5_allKeys.length > 0) {
        key_resp_instr_5.keys = _key_resp_instr_5_allKeys[_key_resp_instr_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_5.rt = _key_resp_instr_5_allKeys[_key_resp_instr_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *spacebarinstr_4* updates
    if (t >= 0.0 && spacebarinstr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebarinstr_4.tStart = t;  // (not accounting for frame time here)
      spacebarinstr_4.frameNStart = frameN;  // exact frame index
      
      spacebarinstr_4.setAutoDraw(true);
    }

    
    // *dot_instr* updates
    if (t >= 0.0 && dot_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_instr.tStart = t;  // (not accounting for frame time here)
      dot_instr.frameNStart = frameN;  // exact frame index
      
      dot_instr.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr5RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr5'-------
    instr5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _question_key_resp_allKeys;
var questionComponents;
function questionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'question'-------
    t = 0;
    questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider.reset()
    question_key_resp.keys = undefined;
    question_key_resp.rt = undefined;
    _question_key_resp_allKeys = [];
    // keep track of which components have finished
    questionComponents = [];
    questionComponents.push(question_text);
    questionComponents.push(slider);
    questionComponents.push(question_key_resp);
    
    questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function questionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'question'-------
    // get current time
    t = questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *question_key_resp* updates
    if (t >= 0.0 && question_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_key_resp.tStart = t;  // (not accounting for frame time here)
      question_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { question_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { question_key_resp.start(); }); // start on screen flip
    }

    if (question_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = question_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _question_key_resp_allKeys = _question_key_resp_allKeys.concat(theseKeys);
      if (_question_key_resp_allKeys.length > 0) {
        question_key_resp.keys = _question_key_resp_allKeys[_question_key_resp_allKeys.length - 1].name;  // just the last key pressed
        question_key_resp.rt = _question_key_resp_allKeys[_question_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'question'-------
    questionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.history', slider.getHistory());
    // the Routine "question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr_6_allKeys;
var instr6Components;
function instr6RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr6'-------
    t = 0;
    instr6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr_6.keys = undefined;
    key_resp_instr_6.rt = undefined;
    _key_resp_instr_6_allKeys = [];
    // keep track of which components have finished
    instr6Components = [];
    instr6Components.push(key_resp_instr_6);
    instr6Components.push(instr_6);
    
    instr6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr6RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr6'-------
    // get current time
    t = instr6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_instr_6* updates
    if (t >= 0.0 && key_resp_instr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr_6.tStart = t;  // (not accounting for frame time here)
      key_resp_instr_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr_6.clearEvents(); });
    }

    if (key_resp_instr_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_6_allKeys = _key_resp_instr_6_allKeys.concat(theseKeys);
      if (_key_resp_instr_6_allKeys.length > 0) {
        key_resp_instr_6.keys = _key_resp_instr_6_allKeys[_key_resp_instr_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr_6.rt = _key_resp_instr_6_allKeys[_key_resp_instr_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_6* updates
    if (t >= 0.0 && instr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_6.tStart = t;  // (not accounting for frame time here)
      instr_6.frameNStart = frameN;  // exact frame index
      
      instr_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr6RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr6'-------
    instr6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var training;
var currentLoop;
function trainingLoopBegin(trainingLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  training = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'training'
  });
  psychoJS.experiment.addLoop(training); // add the loop to the experiment
  currentLoop = training;  // we're now the current loop

  // Schedule all the trials in the trialList:
  training.forEach(function() {
    const snapshot = training.getSnapshot();

    trainingLoopScheduler.add(importConditions(snapshot));
    trainingLoopScheduler.add(centerMousetrainingRoutineBegin(snapshot));
    trainingLoopScheduler.add(centerMousetrainingRoutineEachFrame(snapshot));
    trainingLoopScheduler.add(centerMousetrainingRoutineEnd(snapshot));
    trainingLoopScheduler.add(startpositiontrainingRoutineBegin(snapshot));
    trainingLoopScheduler.add(startpositiontrainingRoutineEachFrame(snapshot));
    trainingLoopScheduler.add(startpositiontrainingRoutineEnd(snapshot));
    trainingLoopScheduler.add(trialtrainingRoutineBegin(snapshot));
    trainingLoopScheduler.add(trialtrainingRoutineEachFrame(snapshot));
    trainingLoopScheduler.add(trialtrainingRoutineEnd(snapshot));
    trainingLoopScheduler.add(feedbacktrainingRoutineBegin(snapshot));
    trainingLoopScheduler.add(feedbacktrainingRoutineEachFrame(snapshot));
    trainingLoopScheduler.add(feedbacktrainingRoutineEnd(snapshot));
    trainingLoopScheduler.add(endLoopIteration(trainingLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trainingLoopEnd() {
  psychoJS.experiment.removeLoop(training);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'chooseBlock.xlsx',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blocks.forEach(function() {
    const snapshot = blocks.getSnapshot();

    blocksLoopScheduler.add(importConditions(snapshot));
    const experimentLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(experimentLoopBegin, experimentLoopScheduler);
    blocksLoopScheduler.add(experimentLoopScheduler);
    blocksLoopScheduler.add(experimentLoopEnd);
    blocksLoopScheduler.add(blockbreakRoutineBegin(snapshot));
    blocksLoopScheduler.add(blockbreakRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(blockbreakRoutineEnd(snapshot));
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var experiment;
function experimentLoopBegin(experimentLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  experiment = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condsFile,
    seed: undefined, name: 'experiment'
  });
  psychoJS.experiment.addLoop(experiment); // add the loop to the experiment
  currentLoop = experiment;  // we're now the current loop

  // Schedule all the trials in the trialList:
  experiment.forEach(function() {
    const snapshot = experiment.getSnapshot();

    experimentLoopScheduler.add(importConditions(snapshot));
    experimentLoopScheduler.add(centerMouseRoutineBegin(snapshot));
    experimentLoopScheduler.add(centerMouseRoutineEachFrame(snapshot));
    experimentLoopScheduler.add(centerMouseRoutineEnd(snapshot));
    experimentLoopScheduler.add(startpositionRoutineBegin(snapshot));
    experimentLoopScheduler.add(startpositionRoutineEachFrame(snapshot));
    experimentLoopScheduler.add(startpositionRoutineEnd(snapshot));
    experimentLoopScheduler.add(trialRoutineBegin(snapshot));
    experimentLoopScheduler.add(trialRoutineEachFrame(snapshot));
    experimentLoopScheduler.add(trialRoutineEnd(snapshot));
    experimentLoopScheduler.add(feedbackRoutineBegin(snapshot));
    experimentLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    experimentLoopScheduler.add(feedbackRoutineEnd(snapshot));
    experimentLoopScheduler.add(endLoopIteration(experimentLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function experimentLoopEnd() {
  psychoJS.experiment.removeLoop(experiment);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var gotValidClick;
var testtrialtext;
var centerMousetrainingComponents;
function centerMousetrainingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'centerMousetraining'-------
    t = 0;
    centerMousetrainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    timeout_text_t.text = "";
    timeoutTimer.reset();
    timeoutTimer.add(60);
    
    // setup some python lists for storing info about the centermouse_t
    centermouse_t.clicked_name = [];
    gotValidClick = false; // until a click is received
    testtrialtext = (testtrialnum.toString() + "/100 trials");
    
    testtrialtext_1.setText(testtrialtext);
    // keep track of which components have finished
    centerMousetrainingComponents = [];
    centerMousetrainingComponents.push(timeout_text_t);
    centerMousetrainingComponents.push(centercircle_t);
    centerMousetrainingComponents.push(centermouse_t);
    centerMousetrainingComponents.push(centerinstr_t);
    centerMousetrainingComponents.push(testtrialtext_1);
    
    centerMousetrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function centerMousetrainingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'centerMousetraining'-------
    // get current time
    t = centerMousetrainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *timeout_text_t* updates
    if (t >= 0.0 && timeout_text_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timeout_text_t.tStart = t;  // (not accounting for frame time here)
      timeout_text_t.frameNStart = frameN;  // exact frame index
      
      timeout_text_t.setAutoDraw(true);
    }

    if ((timeoutTimer.getTime() >= (- 30))) {
        timeout_text_t.text = (("Timeout in " + Number.parseInt((- timeoutTimer.getTime())).toString()) + " secs");
    }
    if ((timeoutTimer.getTime() >= 0)) {
        psychoJS.quit();
    }
    
    
    // *centercircle_t* updates
    if (t >= 0.0 && centercircle_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centercircle_t.tStart = t;  // (not accounting for frame time here)
      centercircle_t.frameNStart = frameN;  // exact frame index
      
      centercircle_t.setAutoDraw(true);
    }

    // *centermouse_t* updates
    if (t >= 0.0 && centermouse_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centermouse_t.tStart = t;  // (not accounting for frame time here)
      centermouse_t.frameNStart = frameN;  // exact frame index
      
      centermouse_t.status = PsychoJS.Status.STARTED;
      centermouse_t.mouseClock.reset();
      prevButtonState = centermouse_t.getPressed();  // if button is down already this ISN'T a new click
      }
    if (centermouse_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = centermouse_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [centercircle_t]) {
            if (obj.contains(centermouse_t)) {
              gotValidClick = true;
              centermouse_t.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *centerinstr_t* updates
    if (t >= 0.0 && centerinstr_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centerinstr_t.tStart = t;  // (not accounting for frame time here)
      centerinstr_t.frameNStart = frameN;  // exact frame index
      
      centerinstr_t.setAutoDraw(true);
    }

    
    // *testtrialtext_1* updates
    if (t >= 0.0 && testtrialtext_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testtrialtext_1.tStart = t;  // (not accounting for frame time here)
      testtrialtext_1.frameNStart = frameN;  // exact frame index
      
      testtrialtext_1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    centerMousetrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function centerMousetrainingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'centerMousetraining'-------
    centerMousetrainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    testtrialnum += 1;
    
    // the Routine "centerMousetraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var num;
var targetPos;
var showTarget;
var hitTarget;
var entryTime;
var lastEntry;
var delayTime;
var startpositiontrainingComponents;
function startpositiontrainingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'startpositiontraining'-------
    t = 0;
    startpositiontrainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    num = randint(1, 7);
    if ((num === 1)) {
        targetPos = [(- 0.6279), 0.16823];
    } else {
        if ((num === 2)) {
            targetPos = [(- 0.65), 0];
        } else {
            if ((num === 3)) {
                targetPos = [(- 0.6279), (- 0.16823)];
            } else {
                if ((num === 4)) {
                    targetPos = [0.6279, 0.16823];
                } else {
                    if ((num === 5)) {
                        targetPos = [0.65, 0];
                    } else {
                        targetPos = [0.6279, (- 0.16823)];
                    }
                }
            }
        }
    }
    showTarget = false;
    wingame = false;
    inaccurate = false;
    falseStart = false;
    hitTarget = false;
    distanceFromTarget = 0;
    distanceFromTargetX = 0;
    distanceFromTargetY = 0;
    distanceFromStart = 0;
    entryTime = "";
    lastEntry = "";
    delayTime = ((randint(2, 6) + 0.5) / 10);
    startPosTimer.reset();
    startPosTimer.add(0.25);
    rtTimer.reset();
    thisExp.addData("trialType", "training");
    
    // setup some python lists for storing info about the mouse_t_wait
    // current position of the mouse:
    mouse_t_wait.x = [];
    mouse_t_wait.y = [];
    mouse_t_wait.leftButton = [];
    mouse_t_wait.midButton = [];
    mouse_t_wait.rightButton = [];
    mouse_t_wait.time = [];
    gotValidClick = false; // until a click is received
    target_t_wait.setPos(targetPos);
    target_t_wait.setSize([targetsize, targetsize]);
    testtrialtext_2.setText(testtrialtext);
    // keep track of which components have finished
    startpositiontrainingComponents = [];
    startpositiontrainingComponents.push(startPos_t_wait);
    startpositiontrainingComponents.push(mouse_t_wait);
    startpositiontrainingComponents.push(target_t_wait);
    startpositiontrainingComponents.push(testtrialtext_2);
    
    startpositiontrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
var actionTime;
function startpositiontrainingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'startpositiontraining'-------
    // get current time
    t = startpositiontrainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *startPos_t_wait* updates
    if (t >= 0.0 && startPos_t_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPos_t_wait.tStart = t;  // (not accounting for frame time here)
      startPos_t_wait.frameNStart = frameN;  // exact frame index
      
      startPos_t_wait.setAutoDraw(true);
    }

    // *mouse_t_wait* updates
    if (t >= 0.0 && mouse_t_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_t_wait.tStart = t;  // (not accounting for frame time here)
      mouse_t_wait.frameNStart = frameN;  // exact frame index
      
      mouse_t_wait.status = PsychoJS.Status.STARTED;
      mouse_t_wait.mouseClock.reset();
      prevButtonState = mouse_t_wait.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_t_wait.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_t_wait.getPressed();
      _mouseXYs = mouse_t_wait.getPos();
      mouse_t_wait.x.push(_mouseXYs[0]);
      mouse_t_wait.y.push(_mouseXYs[1]);
      mouse_t_wait.leftButton.push(_mouseButtons[0]);
      mouse_t_wait.midButton.push(_mouseButtons[1]);
      mouse_t_wait.rightButton.push(_mouseButtons[2]);
      mouse_t_wait.time.push(mouse_t_wait.mouseClock.getTime());
    }
    
    // *target_t_wait* updates
    if ((showTarget) && target_t_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_t_wait.tStart = t;  // (not accounting for frame time here)
      target_t_wait.frameNStart = frameN;  // exact frame index
      
      target_t_wait.setAutoDraw(true);
    }

    if ((! startPos_t_wait.contains(mouse_t_wait))) {
        falseStart = true;
        actionTime = rtTimer.getTime();
        thisExp.addData("actionTime", actionTime);
        thisExp.addData("reactionTime", ((actionTime - delayTime) - 0.25));
        thisExp.addData("duration", actionTime);
        continueRoutine = false;
    } else {
        if (((showTarget === false) && (startPosTimer.getTime() >= 0))) {
            showTarget = true;
            delayTimer.reset();
            delayTimer.add(delayTime);
        } else {
            if (((showTarget === true) && (delayTimer.getTime() >= 0))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *testtrialtext_2* updates
    if (t >= 0.0 && testtrialtext_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testtrialtext_2.tStart = t;  // (not accounting for frame time here)
      testtrialtext_2.frameNStart = frameN;  // exact frame index
      
      testtrialtext_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startpositiontrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startpositiontrainingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'startpositiontraining'-------
    startpositiontrainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_t_wait.x', mouse_t_wait.x);
    psychoJS.experiment.addData('mouse_t_wait.y', mouse_t_wait.y);
    psychoJS.experiment.addData('mouse_t_wait.leftButton', mouse_t_wait.leftButton);
    psychoJS.experiment.addData('mouse_t_wait.midButton', mouse_t_wait.midButton);
    psychoJS.experiment.addData('mouse_t_wait.rightButton', mouse_t_wait.rightButton);
    psychoJS.experiment.addData('mouse_t_wait.time', mouse_t_wait.time);
    
    // the Routine "startpositiontraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stay;
var rtRecorded;
var trialtrainingComponents;
function trialtrainingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trialtraining'-------
    t = 0;
    trialtrainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_t_reach
    // current position of the mouse:
    mouse_t_reach.x = [];
    mouse_t_reach.y = [];
    mouse_t_reach.leftButton = [];
    mouse_t_reach.midButton = [];
    mouse_t_reach.rightButton = [];
    mouse_t_reach.time = [];
    gotValidClick = false; // until a click is received
    reachTimer.reset();
    reachTimer.add(0.7);
    stay = false;
    rtRecorded = false;
    
    target_t_reach.setPos(targetPos);
    target_t_reach.setSize([targetsize, targetsize]);
    testtrialtext_3.setText(testtrialtext);
    // keep track of which components have finished
    trialtrainingComponents = [];
    trialtrainingComponents.push(invis_startPos_t);
    trialtrainingComponents.push(mouse_t_reach);
    trialtrainingComponents.push(target_t_reach);
    trialtrainingComponents.push(testtrialtext_3);
    
    trialtrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var duration;
function trialtrainingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trialtraining'-------
    // get current time
    t = trialtrainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *invis_startPos_t* updates
    if (t >= 0.0 && invis_startPos_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      invis_startPos_t.tStart = t;  // (not accounting for frame time here)
      invis_startPos_t.frameNStart = frameN;  // exact frame index
      
      invis_startPos_t.setAutoDraw(true);
    }

    // *mouse_t_reach* updates
    if (t >= 0.0 && mouse_t_reach.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_t_reach.tStart = t;  // (not accounting for frame time here)
      mouse_t_reach.frameNStart = frameN;  // exact frame index
      
      mouse_t_reach.status = PsychoJS.Status.STARTED;
      mouse_t_reach.mouseClock.reset();
      prevButtonState = mouse_t_reach.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_t_reach.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_t_reach.getPressed();
      _mouseXYs = mouse_t_reach.getPos();
      mouse_t_reach.x.push(_mouseXYs[0]);
      mouse_t_reach.y.push(_mouseXYs[1]);
      mouse_t_reach.leftButton.push(_mouseButtons[0]);
      mouse_t_reach.midButton.push(_mouseButtons[1]);
      mouse_t_reach.rightButton.push(_mouseButtons[2]);
      mouse_t_reach.time.push(mouse_t_reach.mouseClock.getTime());
    }
    if ((falseStart === true)) {
        outcome = "You moved before the center circle disappeared";
        continueRoutine = false;
    } else {
        if (((invis_startPos_t.contains(mouse_t_reach) === false) && (rtRecorded === false))) {
            rtRecorded = true;
            actionTime = rtTimer.getTime();
            thisExp.addData("actionTime", actionTime);
            thisExp.addData("reactionTime", ((actionTime - delayTime) - 0.25));
        }
    }
    if ((target_t_reach.contains(mouse_t_reach) === false)) {
        stay = false;
        if ((reachTimer.getTime() >= 0)) {
            duration = rtTimer.getTime();
            thisExp.addData("duration", duration);
            thisExp.addData("entryTime", entryTime);
            thisExp.addData("lastEntry", lastEntry);
            inaccurate = true;
            outcome = "Your reach was inaccurate";
            mousex = mouse_t_reach.getPos()[0];
            mousey = mouse_t_reach.getPos()[1];
            continueRoutine = false;
        }
    } else {
        if (((target_t_reach.contains(mouse_t_reach) === true) && (stay === false))) {
            lastEntry = rtTimer.getTime().toString();
            if ((! (entryTime === ""))) {
                entryTime += ",";
            }
            entryTime += lastEntry;
            stay = true;
            hitTarget = true;
            winTimer.reset();
            winTimer.add(0.3);
        } else {
            if ((winTimer.getTime() >= 0)) {
                duration = rtTimer.getTime();
                thisExp.addData("duration", duration);
                thisExp.addData("entryTime", entryTime);
                thisExp.addData("lastEntry", lastEntry);
                wingame = true;
                outcome = "Well done! ";
                mousex = mouse_t_reach.getPos()[0];
                mousey = mouse_t_reach.getPos()[1];
                continueRoutine = false;
            }
        }
    }
    
    
    // *target_t_reach* updates
    if (t >= 0 && target_t_reach.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_t_reach.tStart = t;  // (not accounting for frame time here)
      target_t_reach.frameNStart = frameN;  // exact frame index
      
      target_t_reach.setAutoDraw(true);
    }

    
    // *testtrialtext_3* updates
    if (t >= 0.0 && testtrialtext_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testtrialtext_3.tStart = t;  // (not accounting for frame time here)
      testtrialtext_3.frameNStart = frameN;  // exact frame index
      
      testtrialtext_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialtrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialtrainingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trialtraining'-------
    trialtrainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_t_reach.x', mouse_t_reach.x);
    psychoJS.experiment.addData('mouse_t_reach.y', mouse_t_reach.y);
    psychoJS.experiment.addData('mouse_t_reach.leftButton', mouse_t_reach.leftButton);
    psychoJS.experiment.addData('mouse_t_reach.midButton', mouse_t_reach.midButton);
    psychoJS.experiment.addData('mouse_t_reach.rightButton', mouse_t_reach.rightButton);
    psychoJS.experiment.addData('mouse_t_reach.time', mouse_t_reach.time);
    
    // the Routine "trialtraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var tcolor;
var mcolor;
var feedbacktrainingComponents;
function feedbacktrainingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedbacktraining'-------
    t = 0;
    feedbacktrainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if ((falseStart === true)) {
        tcolor = "grey";
        mcolor = "grey";
    } else {
        tcolor = "green";
        mcolor = "black";
    }
    
    outcome_t.setText(outcome);
    target_t_outcome.setFillColor(new util.Color(tcolor));
    target_t_outcome.setPos(targetPos);
    target_t_outcome.setSize([targetsize, targetsize]);
    mousepos_t.setFillColor(new util.Color(mcolor));
    mousepos_t.setPos([mousex, mousey]);
    testtrialtext_4.setText(testtrialtext);
    thisExp.addData("distanceFromTarget", distanceFromTarget);
    distanceFromTargetX = Math.abs((targetPos[0] - mousex));
    distanceFromTargetY = Math.abs((targetPos[1] - mousey));
    distanceFromTarget = (sqrt((Math.pow(distanceFromTargetX, 2) + Math.pow(distanceFromTargetY, 2))) - (targetsize / 2));
    thisExp.addData("distanceFromTarget", distanceFromTarget);
    
    distanceFromStart = (sqrt((Math.pow(abs(mousex), 2) + Math.pow(abs(mousey), 2))) - 0.025);
    thisExp.addData("distanceFromStart", distanceFromStart);
    
    // keep track of which components have finished
    feedbacktrainingComponents = [];
    feedbacktrainingComponents.push(outcome_t);
    feedbacktrainingComponents.push(target_t_outcome);
    feedbacktrainingComponents.push(mousepos_t);
    feedbacktrainingComponents.push(testtrialtext_4);
    
    feedbacktrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbacktrainingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedbacktraining'-------
    // get current time
    t = feedbacktrainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *outcome_t* updates
    if (t >= 0.0 && outcome_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome_t.tStart = t;  // (not accounting for frame time here)
      outcome_t.frameNStart = frameN;  // exact frame index
      
      outcome_t.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outcome_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outcome_t.setAutoDraw(false);
    }
    
    // *target_t_outcome* updates
    if (t >= 0 && target_t_outcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_t_outcome.tStart = t;  // (not accounting for frame time here)
      target_t_outcome.frameNStart = frameN;  // exact frame index
      
      target_t_outcome.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target_t_outcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_t_outcome.setAutoDraw(false);
    }
    
    // *mousepos_t* updates
    if (t >= 0.0 && mousepos_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mousepos_t.tStart = t;  // (not accounting for frame time here)
      mousepos_t.frameNStart = frameN;  // exact frame index
      
      mousepos_t.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mousepos_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mousepos_t.setAutoDraw(false);
    }
    
    // *testtrialtext_4* updates
    if (t >= 0.0 && testtrialtext_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testtrialtext_4.tStart = t;  // (not accounting for frame time here)
      testtrialtext_4.frameNStart = frameN;  // exact frame index
      
      testtrialtext_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (testtrialtext_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      testtrialtext_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbacktrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbacktrainingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedbacktraining'-------
    feedbacktrainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (wingame) {
        wincount = (wincount + 1);
    } else {
        if (inaccurate) {
            if ((targetsize <= 0.19)) {
                targetsize = (targetsize + 0.01);
            }
        }
    }
    if ((wincount === 2)) {
        if ((targetsize >= 0.03)) {
            targetsize = (targetsize - 0.01);
        }
        wincount = 0;
    }
    thisExp.addData("delayTime", delayTime);
    thisExp.addData("targetsize", targetsize);
    if (wingame) {
        thisExp.addData("wingame", 1);
    } else {
        thisExp.addData("wingame", 0);
    }
    if (inaccurate) {
        thisExp.addData("inaccurate", 1);
    } else {
        thisExp.addData("inaccurate", 0);
    }
    if (falseStart) {
        thisExp.addData("falseStart", 1);
    } else {
        thisExp.addData("falseStart", 0);
    }
    if (hitTarget) {
        thisExp.addData("hitTarget", 1);
    } else {
        thisExp.addData("hitTarget", 0);
    }
    thisExp.addData("finalpos", ((mousex.toString() + ",") + mousey.toString()));
    
    return Scheduler.Event.NEXT;
  };
}


var _endResp_t_allKeys;
var EndTrainingComponents;
function EndTrainingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'EndTraining'-------
    t = 0;
    EndTrainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    endResp_t.keys = undefined;
    endResp_t.rt = undefined;
    _endResp_t_allKeys = [];
    // keep track of which components have finished
    EndTrainingComponents = [];
    EndTrainingComponents.push(endResp_t);
    EndTrainingComponents.push(endInstr_t);
    
    EndTrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndTrainingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'EndTraining'-------
    // get current time
    t = EndTrainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endResp_t* updates
    if (t >= 0.0 && endResp_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp_t.tStart = t;  // (not accounting for frame time here)
      endResp_t.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp_t.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp_t.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp_t.clearEvents(); });
    }

    if (endResp_t.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp_t.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_t_allKeys = _endResp_t_allKeys.concat(theseKeys);
      if (_endResp_t_allKeys.length > 0) {
        endResp_t.keys = _endResp_t_allKeys[_endResp_t_allKeys.length - 1].name;  // just the last key pressed
        endResp_t.rt = _endResp_t_allKeys[_endResp_t_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *endInstr_t* updates
    if (t >= 0.0 && endInstr_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endInstr_t.tStart = t;  // (not accounting for frame time here)
      endInstr_t.frameNStart = frameN;  // exact frame index
      
      endInstr_t.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndTrainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndTrainingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'EndTraining'-------
    EndTrainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "EndTraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _startResp_e_allKeys;
var instr_colorpointsComponents;
function instr_colorpointsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_colorpoints'-------
    t = 0;
    instr_colorpointsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    startResp_e.keys = undefined;
    startResp_e.rt = undefined;
    _startResp_e_allKeys = [];
    // keep track of which components have finished
    instr_colorpointsComponents = [];
    instr_colorpointsComponents.push(startInstr_e);
    instr_colorpointsComponents.push(startResp_e);
    instr_colorpointsComponents.push(polygon1);
    instr_colorpointsComponents.push(polygon2);
    instr_colorpointsComponents.push(polygon3);
    instr_colorpointsComponents.push(polygon4);
    instr_colorpointsComponents.push(polygon5);
    instr_colorpointsComponents.push(polygon1Points);
    instr_colorpointsComponents.push(polygon2Points);
    instr_colorpointsComponents.push(polygon3Points);
    instr_colorpointsComponents.push(polygon4Points);
    instr_colorpointsComponents.push(polygon5Points);
    
    instr_colorpointsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_colorpointsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_colorpoints'-------
    // get current time
    t = instr_colorpointsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *startInstr_e* updates
    if (t >= 0.0 && startInstr_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startInstr_e.tStart = t;  // (not accounting for frame time here)
      startInstr_e.frameNStart = frameN;  // exact frame index
      
      startInstr_e.setAutoDraw(true);
    }

    
    // *startResp_e* updates
    if (t >= 0.0 && startResp_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startResp_e.tStart = t;  // (not accounting for frame time here)
      startResp_e.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { startResp_e.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { startResp_e.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { startResp_e.clearEvents(); });
    }

    if (startResp_e.status === PsychoJS.Status.STARTED) {
      let theseKeys = startResp_e.getKeys({keyList: ['space'], waitRelease: false});
      _startResp_e_allKeys = _startResp_e_allKeys.concat(theseKeys);
      if (_startResp_e_allKeys.length > 0) {
        startResp_e.keys = _startResp_e_allKeys[_startResp_e_allKeys.length - 1].name;  // just the last key pressed
        startResp_e.rt = _startResp_e_allKeys[_startResp_e_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon1* updates
    if (t >= 0.0 && polygon1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon1.tStart = t;  // (not accounting for frame time here)
      polygon1.frameNStart = frameN;  // exact frame index
      
      polygon1.setAutoDraw(true);
    }

    
    // *polygon2* updates
    if (t >= 0.0 && polygon2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon2.tStart = t;  // (not accounting for frame time here)
      polygon2.frameNStart = frameN;  // exact frame index
      
      polygon2.setAutoDraw(true);
    }

    
    // *polygon3* updates
    if (t >= 0.0 && polygon3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon3.tStart = t;  // (not accounting for frame time here)
      polygon3.frameNStart = frameN;  // exact frame index
      
      polygon3.setAutoDraw(true);
    }

    
    // *polygon4* updates
    if (t >= 0.0 && polygon4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon4.tStart = t;  // (not accounting for frame time here)
      polygon4.frameNStart = frameN;  // exact frame index
      
      polygon4.setAutoDraw(true);
    }

    
    // *polygon5* updates
    if (t >= 0.0 && polygon5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon5.tStart = t;  // (not accounting for frame time here)
      polygon5.frameNStart = frameN;  // exact frame index
      
      polygon5.setAutoDraw(true);
    }

    
    // *polygon1Points* updates
    if (t >= 0.0 && polygon1Points.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon1Points.tStart = t;  // (not accounting for frame time here)
      polygon1Points.frameNStart = frameN;  // exact frame index
      
      polygon1Points.setAutoDraw(true);
    }

    
    // *polygon2Points* updates
    if (t >= 0.0 && polygon2Points.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon2Points.tStart = t;  // (not accounting for frame time here)
      polygon2Points.frameNStart = frameN;  // exact frame index
      
      polygon2Points.setAutoDraw(true);
    }

    
    // *polygon3Points* updates
    if (t >= 0.0 && polygon3Points.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon3Points.tStart = t;  // (not accounting for frame time here)
      polygon3Points.frameNStart = frameN;  // exact frame index
      
      polygon3Points.setAutoDraw(true);
    }

    
    // *polygon4Points* updates
    if (t >= 0.0 && polygon4Points.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon4Points.tStart = t;  // (not accounting for frame time here)
      polygon4Points.frameNStart = frameN;  // exact frame index
      
      polygon4Points.setAutoDraw(true);
    }

    
    // *polygon5Points* updates
    if (t >= 0.0 && polygon5Points.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon5Points.tStart = t;  // (not accounting for frame time here)
      polygon5Points.frameNStart = frameN;  // exact frame index
      
      polygon5Points.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_colorpointsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_colorpointsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_colorpoints'-------
    instr_colorpointsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr_colorpoints" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_break_warning_allKeys;
var break_warningComponents;
function break_warningRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'break_warning'-------
    t = 0;
    break_warningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_break_warning.keys = undefined;
    key_resp_break_warning.rt = undefined;
    _key_resp_break_warning_allKeys = [];
    // keep track of which components have finished
    break_warningComponents = [];
    break_warningComponents.push(key_resp_break_warning);
    break_warningComponents.push(text_break_warning);
    
    break_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break_warningRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'break_warning'-------
    // get current time
    t = break_warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_break_warning* updates
    if (t >= 0.0 && key_resp_break_warning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_break_warning.tStart = t;  // (not accounting for frame time here)
      key_resp_break_warning.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_break_warning.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_break_warning.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_break_warning.clearEvents(); });
    }

    if (key_resp_break_warning.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_break_warning.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_break_warning_allKeys = _key_resp_break_warning_allKeys.concat(theseKeys);
      if (_key_resp_break_warning_allKeys.length > 0) {
        key_resp_break_warning.keys = _key_resp_break_warning_allKeys[_key_resp_break_warning_allKeys.length - 1].name;  // just the last key pressed
        key_resp_break_warning.rt = _key_resp_break_warning_allKeys[_key_resp_break_warning_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_break_warning* updates
    if (t >= 0.0 && text_break_warning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_break_warning.tStart = t;  // (not accounting for frame time here)
      text_break_warning.frameNStart = frameN;  // exact frame index
      
      text_break_warning.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_warningRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'break_warning'-------
    break_warningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "break_warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var centerMouseComponents;
function centerMouseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'centerMouse'-------
    t = 0;
    centerMouseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    timeout_text_e.text = "";
    timeoutTimer.reset();
    timeoutTimer.add(60);
    
    // setup some python lists for storing info about the centermouse_e
    centermouse_e.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    centerMouseComponents = [];
    centerMouseComponents.push(timeout_text_e);
    centerMouseComponents.push(centercircle);
    centerMouseComponents.push(centermouse_e);
    centerMouseComponents.push(centerInstr_e);
    
    centerMouseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function centerMouseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'centerMouse'-------
    // get current time
    t = centerMouseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *timeout_text_e* updates
    if (t >= 0.0 && timeout_text_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timeout_text_e.tStart = t;  // (not accounting for frame time here)
      timeout_text_e.frameNStart = frameN;  // exact frame index
      
      timeout_text_e.setAutoDraw(true);
    }

    if ((timeoutTimer.getTime() >= (- 30))) {
        timeout_text_e.text = (("Timeout in " + Number.parseInt((- timeoutTimer.getTime())).toString()) + " secs");
    }
    if ((timeoutTimer.getTime() >= 0)) {
        psychoJS.quit();
    }
    
    
    // *centercircle* updates
    if (t >= 0.0 && centercircle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centercircle.tStart = t;  // (not accounting for frame time here)
      centercircle.frameNStart = frameN;  // exact frame index
      
      centercircle.setAutoDraw(true);
    }

    // *centermouse_e* updates
    if (t >= 0.0 && centermouse_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centermouse_e.tStart = t;  // (not accounting for frame time here)
      centermouse_e.frameNStart = frameN;  // exact frame index
      
      centermouse_e.status = PsychoJS.Status.STARTED;
      centermouse_e.mouseClock.reset();
      prevButtonState = centermouse_e.getPressed();  // if button is down already this ISN'T a new click
      }
    if (centermouse_e.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = centermouse_e.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [centercircle]) {
            if (obj.contains(centermouse_e)) {
              gotValidClick = true;
              centermouse_e.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *centerInstr_e* updates
    if (t >= 0.0 && centerInstr_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centerInstr_e.tStart = t;  // (not accounting for frame time here)
      centerInstr_e.frameNStart = frameN;  // exact frame index
      
      centerInstr_e.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    centerMouseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function centerMouseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'centerMouse'-------
    centerMouseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "centerMouse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startpositionComponents;
function startpositionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'startposition'-------
    t = 0;
    startpositionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    targetPos = [Number.parseFloat(targetPosX), Number.parseFloat(targetPosY)];
    if ((targetPoints === 5)) {
        targetColor = fivecolor;
    } else {
        if ((targetPoints === 10)) {
            targetColor = tencolor;
        } else {
            if ((targetPoints === 15)) {
                targetColor = fifteencolor;
            } else {
                if ((targetPoints === 20)) {
                    targetColor = twentycolor;
                } else {
                    if ((targetPoints === 100)) {
                        targetColor = jackpotcolor;
                    }
                }
            }
        }
    }
    showTarget = false;
    wingame = false;
    inaccurate = false;
    falseStart = false;
    hitTarget = false;
    distanceFromTarget = 0;
    distanceFromTargetX = 0;
    distanceFromTargetY = 0;
    distanceFromStart = 0;
    entryTime = "";
    lastEntry = "";
    delayTime = ((randint(2, 6) + 0.5) / 10);
    startPosTimer.reset();
    startPosTimer.add(0.25);
    rtTimer.reset();
    thisExp.addData("trialType", "experiment");
    
    startPos_e_wait.setFillColor(new util.Color(targetColor));
    target_e_wait.setFillColor(new util.Color(targetColor));
    target_e_wait.setPos(targetPos);
    target_e_wait.setSize([targetsize, targetsize]);
    // setup some python lists for storing info about the mouse_e_wait
    // current position of the mouse:
    mouse_e_wait.x = [];
    mouse_e_wait.y = [];
    mouse_e_wait.leftButton = [];
    mouse_e_wait.midButton = [];
    mouse_e_wait.rightButton = [];
    mouse_e_wait.time = [];
    gotValidClick = false; // until a click is received
    targetPoints_e_wait.setPos(targetPos);
    targetPoints_e_wait.setText(targetPoints);
    targetPoints_e_wait.setHeight(((targetsize * 3) / 5));
    spPoints_e_wait.setText(targetPoints);
    // keep track of which components have finished
    startpositionComponents = [];
    startpositionComponents.push(startPos_e_wait);
    startpositionComponents.push(target_e_wait);
    startpositionComponents.push(mouse_e_wait);
    startpositionComponents.push(targetPoints_e_wait);
    startpositionComponents.push(spPoints_e_wait);
    
    startpositionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function startpositionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'startposition'-------
    // get current time
    t = startpositionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((! startPos_e_wait.contains(mouse_e_wait))) {
        falseStart = true;
        actionTime = rtTimer.getTime();
        thisExp.addData("actionTime", actionTime);
        thisExp.addData("reactionTime", ((actionTime - delayTime) - 0.25));
        thisExp.addData("duration", actionTime);
        continueRoutine = false;
    } else {
        if (((showTarget === false) && (startPosTimer.getTime() >= 0))) {
            showTarget = true;
            delayTimer.reset();
            delayTimer.add(delayTime);
        } else {
            if (((showTarget === true) && (delayTimer.getTime() >= 0))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *startPos_e_wait* updates
    if (t >= 0.0 && startPos_e_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPos_e_wait.tStart = t;  // (not accounting for frame time here)
      startPos_e_wait.frameNStart = frameN;  // exact frame index
      
      startPos_e_wait.setAutoDraw(true);
    }

    
    // *target_e_wait* updates
    if ((showTarget) && target_e_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_e_wait.tStart = t;  // (not accounting for frame time here)
      target_e_wait.frameNStart = frameN;  // exact frame index
      
      target_e_wait.setAutoDraw(true);
    }

    // *mouse_e_wait* updates
    if (t >= 0.0 && mouse_e_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_e_wait.tStart = t;  // (not accounting for frame time here)
      mouse_e_wait.frameNStart = frameN;  // exact frame index
      
      mouse_e_wait.status = PsychoJS.Status.STARTED;
      mouse_e_wait.mouseClock.reset();
      prevButtonState = mouse_e_wait.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_e_wait.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_e_wait.getPressed();
      _mouseXYs = mouse_e_wait.getPos();
      mouse_e_wait.x.push(_mouseXYs[0]);
      mouse_e_wait.y.push(_mouseXYs[1]);
      mouse_e_wait.leftButton.push(_mouseButtons[0]);
      mouse_e_wait.midButton.push(_mouseButtons[1]);
      mouse_e_wait.rightButton.push(_mouseButtons[2]);
      mouse_e_wait.time.push(mouse_e_wait.mouseClock.getTime());
    }
    
    // *targetPoints_e_wait* updates
    if ((showTarget) && targetPoints_e_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetPoints_e_wait.tStart = t;  // (not accounting for frame time here)
      targetPoints_e_wait.frameNStart = frameN;  // exact frame index
      
      targetPoints_e_wait.setAutoDraw(true);
    }

    
    // *spPoints_e_wait* updates
    if (t >= 0.0 && spPoints_e_wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spPoints_e_wait.tStart = t;  // (not accounting for frame time here)
      spPoints_e_wait.frameNStart = frameN;  // exact frame index
      
      spPoints_e_wait.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startpositionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startpositionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'startposition'-------
    startpositionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_e_wait.x', mouse_e_wait.x);
    psychoJS.experiment.addData('mouse_e_wait.y', mouse_e_wait.y);
    psychoJS.experiment.addData('mouse_e_wait.leftButton', mouse_e_wait.leftButton);
    psychoJS.experiment.addData('mouse_e_wait.midButton', mouse_e_wait.midButton);
    psychoJS.experiment.addData('mouse_e_wait.rightButton', mouse_e_wait.rightButton);
    psychoJS.experiment.addData('mouse_e_wait.time', mouse_e_wait.time);
    
    // the Routine "startposition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    reachTimer.reset();
    reachTimer.add(0.7);
    stay = false;
    rtRecorded = false;
    
    // setup some python lists for storing info about the mouse_e_reach
    // current position of the mouse:
    mouse_e_reach.x = [];
    mouse_e_reach.y = [];
    mouse_e_reach.leftButton = [];
    mouse_e_reach.midButton = [];
    mouse_e_reach.rightButton = [];
    mouse_e_reach.time = [];
    gotValidClick = false; // until a click is received
    target_e_reach.setFillColor(new util.Color(targetColor));
    target_e_reach.setPos(targetPos);
    target_e_reach.setSize([targetsize, targetsize]);
    targetPoints_e_reach.setPos(targetPos);
    targetPoints_e_reach.setText(targetPoints);
    targetPoints_e_reach.setHeight(((targetsize * 3) / 5));
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(invis_startPos_e);
    trialComponents.push(mouse_e_reach);
    trialComponents.push(target_e_reach);
    trialComponents.push(targetPoints_e_reach);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *invis_startPos_e* updates
    if (t >= 0.0 && invis_startPos_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      invis_startPos_e.tStart = t;  // (not accounting for frame time here)
      invis_startPos_e.frameNStart = frameN;  // exact frame index
      
      invis_startPos_e.setAutoDraw(true);
    }

    if ((falseStart === true)) {
        outcome = "0 points\n\nYou moved before the center circle disappeared";
        continueRoutine = false;
    } else {
        if (((invis_startPos_e.contains(mouse_e_reach) === false) && (rtRecorded === false))) {
            rtRecorded = true;
            actionTime = rtTimer.getTime();
            thisExp.addData("actionTime", actionTime);
            thisExp.addData("reactionTime", ((actionTime - delayTime) - 0.25));
        }
    }
    if ((target_e_reach.contains(mouse_e_reach) === false)) {
        stay = false;
        if ((reachTimer.getTime() >= 0)) {
            duration = rtTimer.getTime();
            thisExp.addData("duration", duration);
            thisExp.addData("entryTime", entryTime);
            thisExp.addData("lastEntry", lastEntry);
            inaccurate = true;
            outcome = "0 points";
            mousex = mouse_e_reach.getPos()[0];
            mousey = mouse_e_reach.getPos()[1];
            continueRoutine = false;
        }
    } else {
        if (((target_e_reach.contains(mouse_e_reach) === true) && (stay === false))) {
            lastEntry = rtTimer.getTime().toString();
            if ((! (entryTime === ""))) {
                entryTime += ",";
            }
            entryTime += lastEntry;
            stay = true;
            hitTarget = true;
            winTimer.reset();
            winTimer.add(0.3);
        } else {
            if ((winTimer.getTime() >= 0)) {
                duration = rtTimer.getTime();
                thisExp.addData("duration", duration);
                thisExp.addData("entryTime", entryTime);
                thisExp.addData("lastEntry", lastEntry);
                wingame = true;
                outcome = (("+" + targetPoints.toString()) + " points!");
                mousex = mouse_e_reach.getPos()[0];
                mousey = mouse_e_reach.getPos()[1];
                continueRoutine = false;
            }
        }
    }
    
    // *mouse_e_reach* updates
    if (t >= 0.0 && mouse_e_reach.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_e_reach.tStart = t;  // (not accounting for frame time here)
      mouse_e_reach.frameNStart = frameN;  // exact frame index
      
      mouse_e_reach.status = PsychoJS.Status.STARTED;
      mouse_e_reach.mouseClock.reset();
      prevButtonState = mouse_e_reach.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_e_reach.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_e_reach.getPressed();
      _mouseXYs = mouse_e_reach.getPos();
      mouse_e_reach.x.push(_mouseXYs[0]);
      mouse_e_reach.y.push(_mouseXYs[1]);
      mouse_e_reach.leftButton.push(_mouseButtons[0]);
      mouse_e_reach.midButton.push(_mouseButtons[1]);
      mouse_e_reach.rightButton.push(_mouseButtons[2]);
      mouse_e_reach.time.push(mouse_e_reach.mouseClock.getTime());
    }
    
    // *target_e_reach* updates
    if (t >= 0 && target_e_reach.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_e_reach.tStart = t;  // (not accounting for frame time here)
      target_e_reach.frameNStart = frameN;  // exact frame index
      
      target_e_reach.setAutoDraw(true);
    }

    
    // *targetPoints_e_reach* updates
    if (t >= 0.0 && targetPoints_e_reach.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetPoints_e_reach.tStart = t;  // (not accounting for frame time here)
      targetPoints_e_reach.frameNStart = frameN;  // exact frame index
      
      targetPoints_e_reach.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("delayTime", delayTime);
    thisExp.addData("targetsize", targetsize);
    if (wingame) {
        thisExp.addData("wingame", 1);
    } else {
        thisExp.addData("wingame", 0);
    }
    if (inaccurate) {
        thisExp.addData("inaccurate", 1);
    } else {
        thisExp.addData("inaccurate", 0);
    }
    if (falseStart) {
        thisExp.addData("falseStart", 1);
    } else {
        thisExp.addData("falseStart", 0);
    }
    if (hitTarget) {
        thisExp.addData("hitTarget", 1);
    } else {
        thisExp.addData("hitTarget", 0);
    }
    thisExp.addData("finalpos", ((mousex.toString() + ",") + mousey.toString()));
    
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_e_reach.x', mouse_e_reach.x);
    psychoJS.experiment.addData('mouse_e_reach.y', mouse_e_reach.y);
    psychoJS.experiment.addData('mouse_e_reach.leftButton', mouse_e_reach.leftButton);
    psychoJS.experiment.addData('mouse_e_reach.midButton', mouse_e_reach.midButton);
    psychoJS.experiment.addData('mouse_e_reach.rightButton', mouse_e_reach.rightButton);
    psychoJS.experiment.addData('mouse_e_reach.time', mouse_e_reach.time);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var textcolor;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if ((wingame === true)) {
        blockpoints += targetPoints;
    }
    if ((falseStart === true)) {
        tcolor = "grey";
        mcolor = "grey";
        textcolor = "grey";
    } else {
        tcolor = targetColor;
        mcolor = "black";
        textcolor = "black";
    }
    
    outcome_e.setText(outcome);
    target_e_outcome.setFillColor(new util.Color(tcolor));
    target_e_outcome.setPos(targetPos);
    target_e_outcome.setSize([targetsize, targetsize]);
    targetPoints_e_reach_2.setColor(new util.Color(textcolor));
    targetPoints_e_reach_2.setPos(targetPos);
    targetPoints_e_reach_2.setText(targetPoints);
    targetPoints_e_reach_2.setHeight(((targetsize * 3) / 5));
    mousepos_e.setFillColor(new util.Color(mcolor));
    mousepos_e.setPos([mousex, mousey]);
    distanceFromTargetX = Math.abs((targetPos[0] - mousex));
    distanceFromTargetY = Math.abs((targetPos[1] - mousey));
    distanceFromTarget = (sqrt((Math.pow(distanceFromTargetX, 2) + Math.pow(distanceFromTargetY, 2))) - (targetsize / 2));
    thisExp.addData("distanceFromTarget", distanceFromTarget);
    
    distanceFromStart = (sqrt((Math.pow(abs(mousex), 2) + Math.pow(abs(mousey), 2))) - 0.025);
    thisExp.addData("distanceFromStart", distanceFromStart);
    
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(outcome_e);
    feedbackComponents.push(target_e_outcome);
    feedbackComponents.push(targetPoints_e_reach_2);
    feedbackComponents.push(mousepos_e);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *outcome_e* updates
    if (t >= 0.0 && outcome_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome_e.tStart = t;  // (not accounting for frame time here)
      outcome_e.frameNStart = frameN;  // exact frame index
      
      outcome_e.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (outcome_e.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      outcome_e.setAutoDraw(false);
    }
    
    // *target_e_outcome* updates
    if (t >= 0 && target_e_outcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_e_outcome.tStart = t;  // (not accounting for frame time here)
      target_e_outcome.frameNStart = frameN;  // exact frame index
      
      target_e_outcome.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target_e_outcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_e_outcome.setAutoDraw(false);
    }
    
    // *targetPoints_e_reach_2* updates
    if (t >= 0.0 && targetPoints_e_reach_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetPoints_e_reach_2.tStart = t;  // (not accounting for frame time here)
      targetPoints_e_reach_2.frameNStart = frameN;  // exact frame index
      
      targetPoints_e_reach_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (targetPoints_e_reach_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      targetPoints_e_reach_2.setAutoDraw(false);
    }
    
    // *mousepos_e* updates
    if (t >= 0.0 && mousepos_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mousepos_e.tStart = t;  // (not accounting for frame time here)
      mousepos_e.frameNStart = frameN;  // exact frame index
      
      mousepos_e.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mousepos_e.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mousepos_e.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blockbreak_allKeys;
var blockbreakComponents;
function blockbreakRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blockbreak'-------
    t = 0;
    blockbreakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    index += 1;
    totalpoints += blockpoints;
    blockbreaktext.text = (((((("Block " + index.toString()) + " complete.\n") + "You earned ") + blockpoints.toString()) + " points this block.\nYou can take a 2-minute break now if you'd like.\n\n") + "When you are ready, press the space bar to proceed");
    timeoutTimer.reset();
    timeoutTimer.add(120);
    
    key_resp_blockbreak.keys = undefined;
    key_resp_blockbreak.rt = undefined;
    _key_resp_blockbreak_allKeys = [];
    // keep track of which components have finished
    blockbreakComponents = [];
    blockbreakComponents.push(blockbreaktext);
    blockbreakComponents.push(timeout_text_break);
    blockbreakComponents.push(key_resp_blockbreak);
    
    blockbreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blockbreakRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blockbreak'-------
    // get current time
    t = blockbreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blockbreaktext* updates
    if (t >= 0.0 && blockbreaktext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockbreaktext.tStart = t;  // (not accounting for frame time here)
      blockbreaktext.frameNStart = frameN;  // exact frame index
      
      blockbreaktext.setAutoDraw(true);
    }

    
    // *timeout_text_break* updates
    if (t >= 0.0 && timeout_text_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timeout_text_break.tStart = t;  // (not accounting for frame time here)
      timeout_text_break.frameNStart = frameN;  // exact frame index
      
      timeout_text_break.setAutoDraw(true);
    }

    if ((timeoutTimer.getTime() >= (-120))) {
        timeout_text_break.text = (("Timeout in " + Number.parseInt((- timeoutTimer.getTime())).toString()) + " secs");
    }
    if ((timeoutTimer.getTime() >= 0)) {
        psychoJS.quit();
    }
    
    
    // *key_resp_blockbreak* updates
    if (t >= 0.0 && key_resp_blockbreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blockbreak.tStart = t;  // (not accounting for frame time here)
      key_resp_blockbreak.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blockbreak.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blockbreak.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blockbreak.clearEvents(); });
    }

    if (key_resp_blockbreak.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blockbreak.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_blockbreak_allKeys = _key_resp_blockbreak_allKeys.concat(theseKeys);
      if (_key_resp_blockbreak_allKeys.length > 0) {
        key_resp_blockbreak.keys = _key_resp_blockbreak_allKeys[_key_resp_blockbreak_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blockbreak.rt = _key_resp_blockbreak_allKeys[_key_resp_blockbreak_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blockbreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blockbreakRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blockbreak'-------
    blockbreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    blockpoints = 0;
    timeout_text_break.text = "";
    
    // the Routine "blockbreak" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var msg;
var pointmsg;
var outcomemsg;
var _endResp_e_allKeys;
var outcomesComponents;
function outcomesRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'outcomes'-------
    t = 0;
    outcomesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    msg = "This is the end of the experiment. ";
    pointmsg = (("You earned a total of " + totalpoints.toString()) + " points. Thank you for your participation!\n\nPress the space bar to exit");
    outcomemsg = (msg + pointmsg);
    thisExp.addData("totalpoints", totalpoints);
    
    endOutcome_e.setText(outcomemsg);
    endResp_e.keys = undefined;
    endResp_e.rt = undefined;
    _endResp_e_allKeys = [];
    // keep track of which components have finished
    outcomesComponents = [];
    outcomesComponents.push(endOutcome_e);
    outcomesComponents.push(endResp_e);
    
    outcomesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function outcomesRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'outcomes'-------
    // get current time
    t = outcomesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endOutcome_e* updates
    if (t >= 0.0 && endOutcome_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endOutcome_e.tStart = t;  // (not accounting for frame time here)
      endOutcome_e.frameNStart = frameN;  // exact frame index
      
      endOutcome_e.setAutoDraw(true);
    }

    
    // *endResp_e* updates
    if (t >= 0.0 && endResp_e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp_e.tStart = t;  // (not accounting for frame time here)
      endResp_e.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp_e.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp_e.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp_e.clearEvents(); });
    }

    if (endResp_e.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp_e.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_e_allKeys = _endResp_e_allKeys.concat(theseKeys);
      if (_endResp_e_allKeys.length > 0) {
        endResp_e.keys = _endResp_e_allKeys[_endResp_e_allKeys.length - 1].name;  // just the last key pressed
        endResp_e.rt = _endResp_e_allKeys[_endResp_e_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    outcomesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function outcomesRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'outcomes'-------
    outcomesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "outcomes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
