#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.2),
    on Tue Jun  1 11:49:23 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.2'
expName = 'mouse_choke'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/yiranli/Downloads/UMich/Research/CoCoA Lab/Mouse_choke task/mouse_choke/mouse_choke.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 800], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instr1"
instr1Clock = core.Clock()
targetColor = "white"
outcome = " "
wingame = False
inaccurate = False
falseStart = False

startPosTimer = core.Clock() 
delayTimer = core.Clock()
reachTimer = core.Clock()
winTimer = core.Clock()
timeoutTimer = core.Clock()
rtTimer = core.Clock()

distanceFromTarget = 0
distanceFromTargetX = 0
distanceFromTargetY = 0
distanceFromStart = 0

targetsize = 0.1
wincount = 0
totalpoints = 0
mousex = 0
mousey = 0
colorint=randint(1,6)
if colorint == 1:
    jackpotcolor = "yellow"
    fifteencolor = "white"
    fivecolor = "red"
    twentycolor = "dodgerblue"
    tencolor = "orange"
elif colorint == 2: 
    twentycolor = "yellow"
    tencolor = "white"
    jackpotcolor = "red"
    fifteencolor = "dodgerblue"
    fivecolor = "orange"
elif colorint == 3: 
    fifteencolor = "yellow"
    fivecolor = "white"
    twentycolor = "red"
    tencolor = "dodgerblue"
    jackpotcolor = "orange"
elif colorint == 4:
    tencolor = "yellow"
    jackpotcolor = "white"
    fifteencolor = "red"
    fivecolor = "dodgerblue"
    twentycolor = "orange"
else:
    fivecolor = "yellow"
    twentycolor = "white"
    tencolor = "red"
    jackpotcolor = "dodgerblue"
    fifteencolor = "orange"

thisExp.addData('colormapping', fivecolor + "," + tencolor + ","
+ fifteencolor + "," + twentycolor + "," + jackpotcolor)
instr_1 = visual.TextStim(win=win, name='instr_1',
    text="In this experiment, you will be making reaching movements with your mouse/trackpad to try to earn cash bonuses.  You'll first spend 5 minutes training on the task and then you will do 5 blocks of 120 trials trying to earn rewards. \n\n\nPress the space bar to continue",
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_instr_1 = keyboard.Keyboard()

# Initialize components for Routine "instr2"
instr2Clock = core.Clock()
centercircle_instr = visual.Polygon(
    win=win, name='centercircle_instr',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor=[1,1,1],
    opacity=1, depth=0.0, interpolate=True)
key_resp_instr_2 = keyboard.Keyboard()
instr_2 = visual.TextStim(win=win, name='instr_2',
    text='Every trial will begin with a white circle at the center of the screen. After you click this circle, you will see a color change. After a short delay, a colored target circle will appear either to the left or to the right. ',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
spacebarinstr = visual.TextStim(win=win, name='spacebarinstr',
    text='Press the space bar to continue',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "instr3"
instr3Clock = core.Clock()
centercircle_instr2 = visual.Polygon(
    win=win, name='centercircle_instr2',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=1, depth=0.0, interpolate=True)
targetcircleinstr = visual.Polygon(
    win=win, name='targetcircleinstr',
    edges=128, size=(0.1, 0.1),
    ori=0.0, pos=(-0.65, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=None, depth=-1.0, interpolate=True)
instr_3 = visual.TextStim(win=win, name='instr_3',
    text='As soon as the center circle disappears, you should move your cursor to the target circle.  There will be a time limit, so you will need to move quickly. ',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_instr_3 = keyboard.Keyboard()
spacebarinstr_2 = visual.TextStim(win=win, name='spacebarinstr_2',
    text='Press the space bar to continue',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "instr4"
instr4Clock = core.Clock()
targetcircleinstr_2 = visual.Polygon(
    win=win, name='targetcircleinstr_2',
    edges=128, size=(0.1, 0.1),
    ori=0.0, pos=(-0.65, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=None, depth=0.0, interpolate=True)
instr_4 = visual.TextStim(win=win, name='instr_4',
    text="After you reach the target circle, you need to hold the cursor there until the end of the trial. If the cursor moves out of the circle before the trial ends, that will count as a 'miss'.",
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_instr_4 = keyboard.Keyboard()
spacebarinstr_3 = visual.TextStim(win=win, name='spacebarinstr_3',
    text='Press the space bar to continue',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "instr5"
instr5Clock = core.Clock()
targetcircleinstr_3 = visual.Polygon(
    win=win, name='targetcircleinstr_3',
    edges=128, size=(0.1, 0.1),
    ori=0.0, pos=(-0.65, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=None, depth=0.0, interpolate=True)
instr_5 = visual.TextStim(win=win, name='instr_5',
    text='At the end of each trial, you will receive feedback on your performance, including a black dot representing your mouse position at the end of the trial. ',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_instr_5 = keyboard.Keyboard()
spacebarinstr_4 = visual.TextStim(win=win, name='spacebarinstr_4',
    text='Press the space bar to continue',
    font='Arial',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
dot_instr = visual.Polygon(
    win=win, name='dot_instr',
    edges=128, size=(0.01, 0.01),
    ori=0.0, pos=(-0.62, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='black',
    opacity=None, depth=-4.0, interpolate=True)

# Initialize components for Routine "instr6"
instr6Clock = core.Clock()
key_resp_instr_6 = keyboard.Keyboard()
instr_6 = visual.TextStim(win=win, name='instr_6',
    text='We will now begin with the training section that will prepare you for the experiment. \n\nPlease stay focused during the process. If you spend too long on the center circle screen, the experiment will terminate, and your entry will be rejected.\n\nPress the space bar to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "centerMousetraining"
centerMousetrainingClock = core.Clock()
timeout_text_t = visual.TextStim(win=win, name='timeout_text_t',
    text=None,
    font='Arial',
    pos=(0, -0.3), height=0.06, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=0.0);
centercircle_t = visual.Polygon(
    win=win, name='centercircle_t',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
centermouse_t = event.Mouse(win=win)
x, y = [None, None]
centermouse_t.mouseClock = core.Clock()
centerinstr_t = visual.TextStim(win=win, name='centerinstr_t',
    text='Click the circle to begin',
    font='Arial',
    pos=(0, .3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
testtrialnum = 1

testtrialtext_1 = visual.TextStim(win=win, name='testtrialtext_1',
    text='',
    font='Arial',
    pos=(0.6, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "startpositiontraining"
startpositiontrainingClock = core.Clock()
startPos_t_wait = visual.Polygon(
    win=win, name='startPos_t_wait',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=1, depth=-1.0, interpolate=True)
mouse_t_wait = event.Mouse(win=win)
x, y = [None, None]
mouse_t_wait.mouseClock = core.Clock()
target_t_wait = visual.Polygon(
    win=win, name='target_t_wait',
    edges=128, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=1, depth=-3.0, interpolate=True)
testtrialtext_2 = visual.TextStim(win=win, name='testtrialtext_2',
    text='',
    font='Arial',
    pos=(0.6, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "trialtraining"
trialtrainingClock = core.Clock()
invis_startPos_t = visual.Polygon(
    win=win, name='invis_startPos_t',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='grey',
    opacity=1, depth=0.0, interpolate=True)
mouse_t_reach = event.Mouse(win=win)
x, y = [None, None]
mouse_t_reach.mouseClock = core.Clock()
target_t_reach = visual.Polygon(
    win=win, name='target_t_reach',
    edges=128, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='green',
    opacity=1, depth=-3.0, interpolate=True)
testtrialtext_3 = visual.TextStim(win=win, name='testtrialtext_3',
    text='',
    font='Arial',
    pos=(0.6, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "feedbacktraining"
feedbacktrainingClock = core.Clock()
outcome_t = visual.TextStim(win=win, name='outcome_t',
    text='',
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
target_t_outcome = visual.Polygon(
    win=win, name='target_t_outcome',
    edges=128, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
mousepos_t = visual.Polygon(
    win=win, name='mousepos_t',
    edges=128, size=(0.01, 0.01),
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
testtrialtext_4 = visual.TextStim(win=win, name='testtrialtext_4',
    text='',
    font='Arial',
    pos=(0.6, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "EndTraining"
EndTrainingClock = core.Clock()
endResp_t = keyboard.Keyboard()
endInstr_t = visual.TextStim(win=win, name='endInstr_t',
    text='Great job!  \n\nWe will now begin the reward section of the experiment where you can earn cash bonuses.  On each trial, the targets will be worth a different number of points that you can earn by successfully completing that trial.\n\nPress the space bar to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "instr_colorpoints"
instr_colorpointsClock = core.Clock()
startInstr_e = visual.TextStim(win=win, name='startInstr_e',
    text='The point value will be displayed both in the center circle at the start of the trial and in the target itself.  The point value on each trial can be either 5, 10, 15, 20, or 100.\nEach reward value is associated with a certain color. \n\nBelow are examples of the colors you will \nsee. \nPress the space bar to continue',
    font='Arial',
    pos=(0, 0.1), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
startResp_e = keyboard.Keyboard()
polygon1 = visual.Polygon(
    win=win, name='polygon1',
    edges=128, size=(0.1, 0.1),
    ori=0, pos=(-0.3, -0.3),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor=fivecolor,
    opacity=1, depth=-2.0, interpolate=True)
polygon2 = visual.Polygon(
    win=win, name='polygon2',
    edges=128, size=(0.1, 0.1),
    ori=0, pos=(-0.15, -0.3),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor=tencolor,
    opacity=1, depth=-3.0, interpolate=True)
polygon3 = visual.Polygon(
    win=win, name='polygon3',
    edges=128, size=(0.1, 0.1),
    ori=0, pos=(0, -0.3),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor=fifteencolor,
    opacity=1, depth=-4.0, interpolate=True)
polygon4 = visual.Polygon(
    win=win, name='polygon4',
    edges=128, size=(0.1, 0.1),
    ori=0, pos=(0.15, -0.3),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor=twentycolor,
    opacity=1, depth=-5.0, interpolate=True)
polygon5 = visual.Polygon(
    win=win, name='polygon5',
    edges=128, size=(0.1, 0.1),
    ori=0, pos=(0.3, -0.3),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor=jackpotcolor,
    opacity=1, depth=-6.0, interpolate=True)
polygon1Points = visual.TextStim(win=win, name='polygon1Points',
    text='5',
    font='Arial',
    pos=(-0.3, -0.3), height=0.06, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
polygon2Points = visual.TextStim(win=win, name='polygon2Points',
    text='10',
    font='Arial',
    pos=(-0.15, -0.3), height=0.06, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
polygon3Points = visual.TextStim(win=win, name='polygon3Points',
    text='15',
    font='Arial',
    pos=(0, -0.3), height=0.06, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
polygon4Points = visual.TextStim(win=win, name='polygon4Points',
    text='20',
    font='Arial',
    pos=(0.15, -0.3), height=0.06, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
polygon5Points = visual.TextStim(win=win, name='polygon5Points',
    text='100',
    font='Arial',
    pos=(0.3, -0.3), height=0.06, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);

# Initialize components for Routine "break_warning"
break_warningClock = core.Clock()
key_resp_break_warning = keyboard.Keyboard()
text_break_warning = visual.TextStim(win=win, name='text_break_warning',
    text='The experiment contains 5 blocks with 120 trials each. \n\nIn-between blocks you may take a short break (1 minute). If you take long breaks during the experiment, the experiment will terminate, and your entry will be rejected.\n\nPress the space bar when you are ready to begin',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "centerMouse"
centerMouseClock = core.Clock()
timeout_text_e = visual.TextStim(win=win, name='timeout_text_e',
    text=None,
    font='Arial',
    pos=(0, -0.3), height=0.06, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=0.0);
centercircle = visual.Polygon(
    win=win, name='centercircle',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
centermouse_e = event.Mouse(win=win)
x, y = [None, None]
centermouse_e.mouseClock = core.Clock()
centerInstr_e = visual.TextStim(win=win, name='centerInstr_e',
    text='Click the circle to begin',
    font='Arial',
    pos=(0, .3), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "startposition"
startpositionClock = core.Clock()
startPos_e_wait = visual.Polygon(
    win=win, name='startPos_e_wait',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
target_e_wait = visual.Polygon(
    win=win, name='target_e_wait',
    edges=128, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-3.0, interpolate=True)
mouse_e_wait = event.Mouse(win=win)
x, y = [None, None]
mouse_e_wait.mouseClock = core.Clock()
targetPoints_e_wait = visual.TextStim(win=win, name='targetPoints_e_wait',
    text='',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
spPoints_e_wait = visual.TextStim(win=win, name='spPoints_e_wait',
    text='',
    font='Arial',
    pos=(0,0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
invis_startPos_e = visual.Polygon(
    win=win, name='invis_startPos_e',
    edges=128, size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='grey',
    opacity=1, depth=0.0, interpolate=True)
mouse_e_reach = event.Mouse(win=win)
x, y = [None, None]
mouse_e_reach.mouseClock = core.Clock()
target_e_reach = visual.Polygon(
    win=win, name='target_e_reach',
    edges=128, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-3.0, interpolate=True)
targetPoints_e_reach = visual.TextStim(win=win, name='targetPoints_e_reach',
    text='',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
outcome_e = visual.TextStim(win=win, name='outcome_e',
    text='',
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
target_e_outcome = visual.Polygon(
    win=win, name='target_e_outcome',
    edges=128, size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
targetPoints_e_reach_2 = visual.TextStim(win=win, name='targetPoints_e_reach_2',
    text='',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
mousepos_e = visual.Polygon(
    win=win, name='mousepos_e',
    edges=128, size=(0.01, 0.01),
    ori=0.0, pos=[0,0],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)

# Initialize components for Routine "blockbreak"
blockbreakClock = core.Clock()
blockbreaktext = visual.TextStim(win=win, name='blockbreaktext',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
timeout_text_break = visual.TextStim(win=win, name='timeout_text_break',
    text=None,
    font='Arial',
    pos=(0, -0.3), height=0.06, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
index = 0
blockpoints = 0
key_resp_blockbreak = keyboard.Keyboard()

# Initialize components for Routine "outcomes"
outcomesClock = core.Clock()
endOutcome_e = visual.TextStim(win=win, name='endOutcome_e',
    text='',
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
endResp_e = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instr1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instr_1.keys = []
key_resp_instr_1.rt = []
_key_resp_instr_1_allKeys = []
# keep track of which components have finished
instr1Components = [instr_1, key_resp_instr_1]
for thisComponent in instr1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr1"-------
while continueRoutine:
    # get current time
    t = instr1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_1* updates
    if instr_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_1.frameNStart = frameN  # exact frame index
        instr_1.tStart = t  # local t and not account for scr refresh
        instr_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_1, 'tStartRefresh')  # time at next scr refresh
        instr_1.setAutoDraw(True)
    
    # *key_resp_instr_1* updates
    if key_resp_instr_1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr_1.frameNStart = frameN  # exact frame index
        key_resp_instr_1.tStart = t  # local t and not account for scr refresh
        key_resp_instr_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr_1, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr_1.status = STARTED
        # keyboard checking is just starting
        key_resp_instr_1.clock.reset()  # now t=0
    if key_resp_instr_1.status == STARTED:
        theseKeys = key_resp_instr_1.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instr_1_allKeys.extend(theseKeys)
        if len(_key_resp_instr_1_allKeys):
            key_resp_instr_1.keys = _key_resp_instr_1_allKeys[-1].name  # just the last key pressed
            key_resp_instr_1.rt = _key_resp_instr_1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr1"-------
for thisComponent in instr1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instr_2.keys = []
key_resp_instr_2.rt = []
_key_resp_instr_2_allKeys = []
# keep track of which components have finished
instr2Components = [centercircle_instr, key_resp_instr_2, instr_2, spacebarinstr]
for thisComponent in instr2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr2"-------
while continueRoutine:
    # get current time
    t = instr2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *centercircle_instr* updates
    if centercircle_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        centercircle_instr.frameNStart = frameN  # exact frame index
        centercircle_instr.tStart = t  # local t and not account for scr refresh
        centercircle_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(centercircle_instr, 'tStartRefresh')  # time at next scr refresh
        centercircle_instr.setAutoDraw(True)
    
    # *key_resp_instr_2* updates
    if key_resp_instr_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr_2.frameNStart = frameN  # exact frame index
        key_resp_instr_2.tStart = t  # local t and not account for scr refresh
        key_resp_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr_2.status = STARTED
        # keyboard checking is just starting
        key_resp_instr_2.clock.reset()  # now t=0
    if key_resp_instr_2.status == STARTED:
        theseKeys = key_resp_instr_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instr_2_allKeys.extend(theseKeys)
        if len(_key_resp_instr_2_allKeys):
            key_resp_instr_2.keys = _key_resp_instr_2_allKeys[-1].name  # just the last key pressed
            key_resp_instr_2.rt = _key_resp_instr_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *instr_2* updates
    if instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_2.frameNStart = frameN  # exact frame index
        instr_2.tStart = t  # local t and not account for scr refresh
        instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_2, 'tStartRefresh')  # time at next scr refresh
        instr_2.setAutoDraw(True)
    
    # *spacebarinstr* updates
    if spacebarinstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebarinstr.frameNStart = frameN  # exact frame index
        spacebarinstr.tStart = t  # local t and not account for scr refresh
        spacebarinstr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebarinstr, 'tStartRefresh')  # time at next scr refresh
        spacebarinstr.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr2"-------
for thisComponent in instr2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instr_3.keys = []
key_resp_instr_3.rt = []
_key_resp_instr_3_allKeys = []
# keep track of which components have finished
instr3Components = [centercircle_instr2, targetcircleinstr, instr_3, key_resp_instr_3, spacebarinstr_2]
for thisComponent in instr3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr3"-------
while continueRoutine:
    # get current time
    t = instr3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *centercircle_instr2* updates
    if centercircle_instr2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        centercircle_instr2.frameNStart = frameN  # exact frame index
        centercircle_instr2.tStart = t  # local t and not account for scr refresh
        centercircle_instr2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(centercircle_instr2, 'tStartRefresh')  # time at next scr refresh
        centercircle_instr2.setAutoDraw(True)
    if centercircle_instr2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > centercircle_instr2.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            centercircle_instr2.tStop = t  # not accounting for scr refresh
            centercircle_instr2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(centercircle_instr2, 'tStopRefresh')  # time at next scr refresh
            centercircle_instr2.setAutoDraw(False)
    
    # *targetcircleinstr* updates
    if targetcircleinstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        targetcircleinstr.frameNStart = frameN  # exact frame index
        targetcircleinstr.tStart = t  # local t and not account for scr refresh
        targetcircleinstr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(targetcircleinstr, 'tStartRefresh')  # time at next scr refresh
        targetcircleinstr.setAutoDraw(True)
    
    # *instr_3* updates
    if instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_3.frameNStart = frameN  # exact frame index
        instr_3.tStart = t  # local t and not account for scr refresh
        instr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_3, 'tStartRefresh')  # time at next scr refresh
        instr_3.setAutoDraw(True)
    
    # *key_resp_instr_3* updates
    waitOnFlip = False
    if key_resp_instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr_3.frameNStart = frameN  # exact frame index
        key_resp_instr_3.tStart = t  # local t and not account for scr refresh
        key_resp_instr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instr_3.clock.reset)  # t=0 on next screen flip
    if key_resp_instr_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instr_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instr_3_allKeys.extend(theseKeys)
        if len(_key_resp_instr_3_allKeys):
            key_resp_instr_3.keys = _key_resp_instr_3_allKeys[-1].name  # just the last key pressed
            key_resp_instr_3.rt = _key_resp_instr_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *spacebarinstr_2* updates
    if spacebarinstr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebarinstr_2.frameNStart = frameN  # exact frame index
        spacebarinstr_2.tStart = t  # local t and not account for scr refresh
        spacebarinstr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebarinstr_2, 'tStartRefresh')  # time at next scr refresh
        spacebarinstr_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr3"-------
for thisComponent in instr3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr4"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instr_4.keys = []
key_resp_instr_4.rt = []
_key_resp_instr_4_allKeys = []
# keep track of which components have finished
instr4Components = [targetcircleinstr_2, instr_4, key_resp_instr_4, spacebarinstr_3]
for thisComponent in instr4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr4"-------
while continueRoutine:
    # get current time
    t = instr4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *targetcircleinstr_2* updates
    if targetcircleinstr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        targetcircleinstr_2.frameNStart = frameN  # exact frame index
        targetcircleinstr_2.tStart = t  # local t and not account for scr refresh
        targetcircleinstr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(targetcircleinstr_2, 'tStartRefresh')  # time at next scr refresh
        targetcircleinstr_2.setAutoDraw(True)
    
    # *instr_4* updates
    if instr_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_4.frameNStart = frameN  # exact frame index
        instr_4.tStart = t  # local t and not account for scr refresh
        instr_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_4, 'tStartRefresh')  # time at next scr refresh
        instr_4.setAutoDraw(True)
    
    # *key_resp_instr_4* updates
    waitOnFlip = False
    if key_resp_instr_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr_4.frameNStart = frameN  # exact frame index
        key_resp_instr_4.tStart = t  # local t and not account for scr refresh
        key_resp_instr_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instr_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instr_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instr_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instr_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instr_4_allKeys.extend(theseKeys)
        if len(_key_resp_instr_4_allKeys):
            key_resp_instr_4.keys = _key_resp_instr_4_allKeys[-1].name  # just the last key pressed
            key_resp_instr_4.rt = _key_resp_instr_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *spacebarinstr_3* updates
    if spacebarinstr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebarinstr_3.frameNStart = frameN  # exact frame index
        spacebarinstr_3.tStart = t  # local t and not account for scr refresh
        spacebarinstr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebarinstr_3, 'tStartRefresh')  # time at next scr refresh
        spacebarinstr_3.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr4"-------
for thisComponent in instr4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr5"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instr_5.keys = []
key_resp_instr_5.rt = []
_key_resp_instr_5_allKeys = []
# keep track of which components have finished
instr5Components = [targetcircleinstr_3, instr_5, key_resp_instr_5, spacebarinstr_4, dot_instr]
for thisComponent in instr5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr5"-------
while continueRoutine:
    # get current time
    t = instr5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *targetcircleinstr_3* updates
    if targetcircleinstr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        targetcircleinstr_3.frameNStart = frameN  # exact frame index
        targetcircleinstr_3.tStart = t  # local t and not account for scr refresh
        targetcircleinstr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(targetcircleinstr_3, 'tStartRefresh')  # time at next scr refresh
        targetcircleinstr_3.setAutoDraw(True)
    
    # *instr_5* updates
    if instr_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_5.frameNStart = frameN  # exact frame index
        instr_5.tStart = t  # local t and not account for scr refresh
        instr_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_5, 'tStartRefresh')  # time at next scr refresh
        instr_5.setAutoDraw(True)
    
    # *key_resp_instr_5* updates
    waitOnFlip = False
    if key_resp_instr_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr_5.frameNStart = frameN  # exact frame index
        key_resp_instr_5.tStart = t  # local t and not account for scr refresh
        key_resp_instr_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instr_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instr_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instr_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instr_5.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instr_5_allKeys.extend(theseKeys)
        if len(_key_resp_instr_5_allKeys):
            key_resp_instr_5.keys = _key_resp_instr_5_allKeys[-1].name  # just the last key pressed
            key_resp_instr_5.rt = _key_resp_instr_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *spacebarinstr_4* updates
    if spacebarinstr_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebarinstr_4.frameNStart = frameN  # exact frame index
        spacebarinstr_4.tStart = t  # local t and not account for scr refresh
        spacebarinstr_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebarinstr_4, 'tStartRefresh')  # time at next scr refresh
        spacebarinstr_4.setAutoDraw(True)
    
    # *dot_instr* updates
    if dot_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        dot_instr.frameNStart = frameN  # exact frame index
        dot_instr.tStart = t  # local t and not account for scr refresh
        dot_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(dot_instr, 'tStartRefresh')  # time at next scr refresh
        dot_instr.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr5"-------
for thisComponent in instr5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr6"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_instr_6.keys = []
key_resp_instr_6.rt = []
_key_resp_instr_6_allKeys = []
# keep track of which components have finished
instr6Components = [key_resp_instr_6, instr_6]
for thisComponent in instr6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr6"-------
while continueRoutine:
    # get current time
    t = instr6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_instr_6* updates
    waitOnFlip = False
    if key_resp_instr_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_instr_6.frameNStart = frameN  # exact frame index
        key_resp_instr_6.tStart = t  # local t and not account for scr refresh
        key_resp_instr_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_instr_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_instr_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_instr_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_instr_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_instr_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_instr_6.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_instr_6_allKeys.extend(theseKeys)
        if len(_key_resp_instr_6_allKeys):
            key_resp_instr_6.keys = _key_resp_instr_6_allKeys[-1].name  # just the last key pressed
            key_resp_instr_6.rt = _key_resp_instr_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *instr_6* updates
    if instr_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_6.frameNStart = frameN  # exact frame index
        instr_6.tStart = t  # local t and not account for scr refresh
        instr_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_6, 'tStartRefresh')  # time at next scr refresh
        instr_6.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr6"-------
for thisComponent in instr6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
training = data.TrialHandler(nReps=100, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='training')
thisExp.addLoop(training)  # add the loop to the experiment
thisTraining = training.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTraining.rgb)
if thisTraining != None:
    for paramName in thisTraining:
        exec('{} = thisTraining[paramName]'.format(paramName))

for thisTraining in training:
    currentLoop = training
    # abbreviate parameter names if possible (e.g. rgb = thisTraining.rgb)
    if thisTraining != None:
        for paramName in thisTraining:
            exec('{} = thisTraining[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "centerMousetraining"-------
    continueRoutine = True
    # update component parameters for each repeat
    timeout_text_t.text = ""
    timeoutTimer.reset()
    timeoutTimer.add(60)
    # setup some python lists for storing info about the centermouse_t
    centermouse_t.clicked_name = []
    gotValidClick = False  # until a click is received
    testtrialtext = str(testtrialnum) + "/100 trials"
    testtrialtext_1.setText(testtrialtext)
    # keep track of which components have finished
    centerMousetrainingComponents = [timeout_text_t, centercircle_t, centermouse_t, centerinstr_t, testtrialtext_1]
    for thisComponent in centerMousetrainingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    centerMousetrainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "centerMousetraining"-------
    while continueRoutine:
        # get current time
        t = centerMousetrainingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=centerMousetrainingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *timeout_text_t* updates
        if timeout_text_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            timeout_text_t.frameNStart = frameN  # exact frame index
            timeout_text_t.tStart = t  # local t and not account for scr refresh
            timeout_text_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(timeout_text_t, 'tStartRefresh')  # time at next scr refresh
            timeout_text_t.setAutoDraw(True)
        if timeoutTimer.getTime() >= -30:
            timeout_text_t.text = 'Timeout in ' + str(int(-timeoutTimer.getTime())) + ' secs'
        
        if timeoutTimer.getTime() >= 0:
            core.quit()
        
        # *centercircle_t* updates
        if centercircle_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            centercircle_t.frameNStart = frameN  # exact frame index
            centercircle_t.tStart = t  # local t and not account for scr refresh
            centercircle_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(centercircle_t, 'tStartRefresh')  # time at next scr refresh
            centercircle_t.setAutoDraw(True)
        # *centermouse_t* updates
        if centermouse_t.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            centermouse_t.frameNStart = frameN  # exact frame index
            centermouse_t.tStart = t  # local t and not account for scr refresh
            centermouse_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(centermouse_t, 'tStartRefresh')  # time at next scr refresh
            centermouse_t.status = STARTED
            centermouse_t.mouseClock.reset()
            prevButtonState = centermouse_t.getPressed()  # if button is down already this ISN'T a new click
        if centermouse_t.status == STARTED:  # only update if started and not finished!
            buttons = centermouse_t.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [centercircle_t]:
                        if obj.contains(centermouse_t):
                            gotValidClick = True
                            centermouse_t.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *centerinstr_t* updates
        if centerinstr_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            centerinstr_t.frameNStart = frameN  # exact frame index
            centerinstr_t.tStart = t  # local t and not account for scr refresh
            centerinstr_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(centerinstr_t, 'tStartRefresh')  # time at next scr refresh
            centerinstr_t.setAutoDraw(True)
        
        # *testtrialtext_1* updates
        if testtrialtext_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            testtrialtext_1.frameNStart = frameN  # exact frame index
            testtrialtext_1.tStart = t  # local t and not account for scr refresh
            testtrialtext_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(testtrialtext_1, 'tStartRefresh')  # time at next scr refresh
            testtrialtext_1.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in centerMousetrainingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "centerMousetraining"-------
    for thisComponent in centerMousetrainingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for training (TrialHandler)
    training.addData('centermouse_t.started', centermouse_t.tStart)
    training.addData('centermouse_t.stopped', centermouse_t.tStop)
    testtrialnum += 1
    # the Routine "centerMousetraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "startpositiontraining"-------
    continueRoutine = True
    # update component parameters for each repeat
    #determine target position
    num = randint(1,7)
    if num == 1:
        targetPos = (-0.6279,0.16823)
    elif num == 2:
        targetPos = (-0.65,0)
    elif num == 3: 
        targetPos = (-0.6279,-0.16823)
    elif num == 4:
        targetPos = (0.6279,0.16823)
    elif num == 5:
        targetPos = (0.65,0)
    else: 
        targetPos = (0.6279,-0.16823)
    
    #reset game variables
    showTarget=False
    wingame = False
    inaccurate = False
    falseStart = False
    hitTarget = False
    distanceFromTarget = 0
    distanceFromTargetX = 0
    distanceFromTargetY = 0
    distanceFromStart = 0
    entryTime = ""
    
    #set timer for mouse in start position
    delayTime = (randint(2,6) + 0.50)/10
    startPosTimer.reset()
    startPosTimer.add(0.25)
    rtTimer.reset()
    thisExp.addData('trialType', "training")
    
    # setup some python lists for storing info about the mouse_t_wait
    mouse_t_wait.x = []
    mouse_t_wait.y = []
    mouse_t_wait.leftButton = []
    mouse_t_wait.midButton = []
    mouse_t_wait.rightButton = []
    mouse_t_wait.time = []
    gotValidClick = False  # until a click is received
    target_t_wait.setPos(targetPos)
    target_t_wait.setSize([targetsize, targetsize])
    testtrialtext_2.setText(testtrialtext)
    # keep track of which components have finished
    startpositiontrainingComponents = [startPos_t_wait, mouse_t_wait, target_t_wait, testtrialtext_2]
    for thisComponent in startpositiontrainingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    startpositiontrainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "startpositiontraining"-------
    while continueRoutine:
        # get current time
        t = startpositiontrainingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=startpositiontrainingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *startPos_t_wait* updates
        if startPos_t_wait.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            startPos_t_wait.frameNStart = frameN  # exact frame index
            startPos_t_wait.tStart = t  # local t and not account for scr refresh
            startPos_t_wait.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(startPos_t_wait, 'tStartRefresh')  # time at next scr refresh
            startPos_t_wait.setAutoDraw(True)
        # *mouse_t_wait* updates
        if mouse_t_wait.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_t_wait.frameNStart = frameN  # exact frame index
            mouse_t_wait.tStart = t  # local t and not account for scr refresh
            mouse_t_wait.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_t_wait, 'tStartRefresh')  # time at next scr refresh
            mouse_t_wait.status = STARTED
            mouse_t_wait.mouseClock.reset()
            prevButtonState = mouse_t_wait.getPressed()  # if button is down already this ISN'T a new click
        if mouse_t_wait.status == STARTED:  # only update if started and not finished!
            x, y = mouse_t_wait.getPos()
            mouse_t_wait.x.append(x)
            mouse_t_wait.y.append(y)
            buttons = mouse_t_wait.getPressed()
            mouse_t_wait.leftButton.append(buttons[0])
            mouse_t_wait.midButton.append(buttons[1])
            mouse_t_wait.rightButton.append(buttons[2])
            mouse_t_wait.time.append(mouse_t_wait.mouseClock.getTime())
        
        # *target_t_wait* updates
        if target_t_wait.status == NOT_STARTED and showTarget:
            # keep track of start time/frame for later
            target_t_wait.frameNStart = frameN  # exact frame index
            target_t_wait.tStart = t  # local t and not account for scr refresh
            target_t_wait.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_t_wait, 'tStartRefresh')  # time at next scr refresh
            target_t_wait.setAutoDraw(True)
        if not startPos_t_wait.contains(mouse_t_wait): 
            falseStart = True
            actionTime = rtTimer.getTime()
            thisExp.addData('actionTime', actionTime)
            thisExp.addData('reactionTime', actionTime-delayTime-0.25)
            thisExp.addData('duration', actionTime)
            continueRoutine = False
        
        elif showTarget == False and startPosTimer.getTime() >= 0:
            showTarget = True
            delayTimer.reset()
            delayTimer.add(delayTime)
        elif showTarget == True and delayTimer.getTime() >= 0:
            continueRoutine = False
        
        # *testtrialtext_2* updates
        if testtrialtext_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            testtrialtext_2.frameNStart = frameN  # exact frame index
            testtrialtext_2.tStart = t  # local t and not account for scr refresh
            testtrialtext_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(testtrialtext_2, 'tStartRefresh')  # time at next scr refresh
            testtrialtext_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in startpositiontrainingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "startpositiontraining"-------
    for thisComponent in startpositiontrainingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for training (TrialHandler)
    training.addData('mouse_t_wait.x', mouse_t_wait.x)
    training.addData('mouse_t_wait.y', mouse_t_wait.y)
    training.addData('mouse_t_wait.leftButton', mouse_t_wait.leftButton)
    training.addData('mouse_t_wait.midButton', mouse_t_wait.midButton)
    training.addData('mouse_t_wait.rightButton', mouse_t_wait.rightButton)
    training.addData('mouse_t_wait.time', mouse_t_wait.time)
    training.addData('mouse_t_wait.started', mouse_t_wait.tStart)
    training.addData('mouse_t_wait.stopped', mouse_t_wait.tStop)
    # the Routine "startpositiontraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "trialtraining"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_t_reach
    mouse_t_reach.x = []
    mouse_t_reach.y = []
    mouse_t_reach.leftButton = []
    mouse_t_reach.midButton = []
    mouse_t_reach.rightButton = []
    mouse_t_reach.time = []
    gotValidClick = False  # until a click is received
    reachTimer.reset()
    reachTimer.add(0.7)
    stay = False
    rtRecorded = False
    target_t_reach.setPos(targetPos)
    target_t_reach.setSize([targetsize, targetsize])
    testtrialtext_3.setText(testtrialtext)
    # keep track of which components have finished
    trialtrainingComponents = [invis_startPos_t, mouse_t_reach, target_t_reach, testtrialtext_3]
    for thisComponent in trialtrainingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialtrainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trialtraining"-------
    while continueRoutine:
        # get current time
        t = trialtrainingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialtrainingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *invis_startPos_t* updates
        if invis_startPos_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            invis_startPos_t.frameNStart = frameN  # exact frame index
            invis_startPos_t.tStart = t  # local t and not account for scr refresh
            invis_startPos_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(invis_startPos_t, 'tStartRefresh')  # time at next scr refresh
            invis_startPos_t.setAutoDraw(True)
        # *mouse_t_reach* updates
        if mouse_t_reach.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_t_reach.frameNStart = frameN  # exact frame index
            mouse_t_reach.tStart = t  # local t and not account for scr refresh
            mouse_t_reach.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_t_reach, 'tStartRefresh')  # time at next scr refresh
            mouse_t_reach.status = STARTED
            mouse_t_reach.mouseClock.reset()
            prevButtonState = mouse_t_reach.getPressed()  # if button is down already this ISN'T a new click
        if mouse_t_reach.status == STARTED:  # only update if started and not finished!
            x, y = mouse_t_reach.getPos()
            mouse_t_reach.x.append(x)
            mouse_t_reach.y.append(y)
            buttons = mouse_t_reach.getPressed()
            mouse_t_reach.leftButton.append(buttons[0])
            mouse_t_reach.midButton.append(buttons[1])
            mouse_t_reach.rightButton.append(buttons[2])
            mouse_t_reach.time.append(mouse_t_reach.mouseClock.getTime())
        if falseStart == True: 
            outcome = "You moved before the center circle disappeared"
            continueRoutine = False
        elif invis_startPos_t.contains(mouse_t_reach) == False and rtRecorded == False:
            rtRecorded = True
            actionTime = rtTimer.getTime()
            thisExp.addData('actionTime', actionTime)
            thisExp.addData('reactionTime', actionTime-delayTime-0.25)
        
        if target_t_reach.contains(mouse_t_reach) == False:
            stay = False
            if reachTimer.getTime() >= 0:
                duration = rtTimer.getTime()
                thisExp.addData('duration', duration)
                thisExp.addData('entryTime', entryTime)
                inaccurate = True
                outcome = "Your reach was inaccurate"
                mousex = mouse_t_reach.getPos()[0]
                mousey = mouse_t_reach.getPos()[1]
                continueRoutine = False
        elif target_t_reach.contains(mouse_t_reach) == True and stay == False:
            if not entryTime == "":
                entryTime += ","
            entryTime += str(rtTimer.getTime())
            stay = True
            hitTarget = True
            winTimer.reset()
            winTimer.add(0.3)
        else:
            if winTimer.getTime() >= 0:
                duration = rtTimer.getTime()
                thisExp.addData('duration', duration)
                thisExp.addData('entryTime', entryTime)
                wingame = True
                outcome = "Well done! "
                mousex = mouse_t_reach.getPos()[0]
                mousey = mouse_t_reach.getPos()[1]
                continueRoutine = False
        
        # *target_t_reach* updates
        if target_t_reach.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            target_t_reach.frameNStart = frameN  # exact frame index
            target_t_reach.tStart = t  # local t and not account for scr refresh
            target_t_reach.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_t_reach, 'tStartRefresh')  # time at next scr refresh
            target_t_reach.setAutoDraw(True)
        
        # *testtrialtext_3* updates
        if testtrialtext_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            testtrialtext_3.frameNStart = frameN  # exact frame index
            testtrialtext_3.tStart = t  # local t and not account for scr refresh
            testtrialtext_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(testtrialtext_3, 'tStartRefresh')  # time at next scr refresh
            testtrialtext_3.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialtrainingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trialtraining"-------
    for thisComponent in trialtrainingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for training (TrialHandler)
    training.addData('mouse_t_reach.x', mouse_t_reach.x)
    training.addData('mouse_t_reach.y', mouse_t_reach.y)
    training.addData('mouse_t_reach.leftButton', mouse_t_reach.leftButton)
    training.addData('mouse_t_reach.midButton', mouse_t_reach.midButton)
    training.addData('mouse_t_reach.rightButton', mouse_t_reach.rightButton)
    training.addData('mouse_t_reach.time', mouse_t_reach.time)
    training.addData('mouse_t_reach.started', mouse_t_reach.tStart)
    training.addData('mouse_t_reach.stopped', mouse_t_reach.tStop)
    # the Routine "trialtraining" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedbacktraining"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    if falseStart == True:
        tcolor = 'grey'
        mcolor = 'grey'
    else:
        tcolor = 'green'
        mcolor = 'black'
    outcome_t.setText(outcome)
    target_t_outcome.setFillColor(tcolor)
    target_t_outcome.setPos(targetPos)
    target_t_outcome.setSize([targetsize, targetsize])
    mousepos_t.setFillColor(mcolor)
    mousepos_t.setPos((mousex, mousey))
    testtrialtext_4.setText(testtrialtext)
    thisExp.addData('distanceFromTarget', distanceFromTarget)
    
    distanceFromTargetX = abs(targetPos[0]-mousex)
    distanceFromTargetY = abs(targetPos[1]-mousey)
    distanceFromTarget = sqrt(distanceFromTargetX**2+distanceFromTargetY**2) - targetsize/2
    
    thisExp.addData('distanceFromTarget', distanceFromTarget)
    distanceFromStart = sqrt(abs(mousex)**2+abs(mousey)**2) - 0.025
    
    thisExp.addData('distanceFromStart', distanceFromStart)
    # keep track of which components have finished
    feedbacktrainingComponents = [outcome_t, target_t_outcome, mousepos_t, testtrialtext_4]
    for thisComponent in feedbacktrainingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedbacktrainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedbacktraining"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedbacktrainingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedbacktrainingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *outcome_t* updates
        if outcome_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            outcome_t.frameNStart = frameN  # exact frame index
            outcome_t.tStart = t  # local t and not account for scr refresh
            outcome_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(outcome_t, 'tStartRefresh')  # time at next scr refresh
            outcome_t.setAutoDraw(True)
        if outcome_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > outcome_t.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                outcome_t.tStop = t  # not accounting for scr refresh
                outcome_t.frameNStop = frameN  # exact frame index
                win.timeOnFlip(outcome_t, 'tStopRefresh')  # time at next scr refresh
                outcome_t.setAutoDraw(False)
        
        # *target_t_outcome* updates
        if target_t_outcome.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            target_t_outcome.frameNStart = frameN  # exact frame index
            target_t_outcome.tStart = t  # local t and not account for scr refresh
            target_t_outcome.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target_t_outcome, 'tStartRefresh')  # time at next scr refresh
            target_t_outcome.setAutoDraw(True)
        if target_t_outcome.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > target_t_outcome.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                target_t_outcome.tStop = t  # not accounting for scr refresh
                target_t_outcome.frameNStop = frameN  # exact frame index
                win.timeOnFlip(target_t_outcome, 'tStopRefresh')  # time at next scr refresh
                target_t_outcome.setAutoDraw(False)
        
        # *mousepos_t* updates
        if mousepos_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mousepos_t.frameNStart = frameN  # exact frame index
            mousepos_t.tStart = t  # local t and not account for scr refresh
            mousepos_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mousepos_t, 'tStartRefresh')  # time at next scr refresh
            mousepos_t.setAutoDraw(True)
        if mousepos_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mousepos_t.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                mousepos_t.tStop = t  # not accounting for scr refresh
                mousepos_t.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mousepos_t, 'tStopRefresh')  # time at next scr refresh
                mousepos_t.setAutoDraw(False)
        
        # *testtrialtext_4* updates
        if testtrialtext_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            testtrialtext_4.frameNStart = frameN  # exact frame index
            testtrialtext_4.tStart = t  # local t and not account for scr refresh
            testtrialtext_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(testtrialtext_4, 'tStartRefresh')  # time at next scr refresh
            testtrialtext_4.setAutoDraw(True)
        if testtrialtext_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > testtrialtext_4.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                testtrialtext_4.tStop = t  # not accounting for scr refresh
                testtrialtext_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(testtrialtext_4, 'tStopRefresh')  # time at next scr refresh
                testtrialtext_4.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedbacktrainingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedbacktraining"-------
    for thisComponent in feedbacktrainingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if wingame:
        wincount = wincount + 1
    elif inaccurate:
        if targetsize <= 0.19:
            targetsize = targetsize + 0.01
    
    if wincount == 2:
        if targetsize >= 0.02:
            targetsize = targetsize - 0.01
        wincount = 0
        
    thisExp.addData('delayTime', delayTime)
    thisExp.addData('targetsize', targetsize)
    if wingame:
        thisExp.addData('wingame', 1)
    else:
        thisExp.addData('wingame', 0)
    if inaccurate:
        thisExp.addData('inaccurate', 1)
    else:
        thisExp.addData('inaccurate', 0)
    if falseStart: 
        thisExp.addData('falseStart', 1)
    else:
        thisExp.addData('falseStart', 0)
    if hitTarget:
        thisExp.addData('hitTarget', 1)
    else:
        thisExp.addData('hitTarget', 0)
    thisExp.addData('finalpos', str(mousex) + "," + str(mousey))
    thisExp.nextEntry()
    
# completed 100 repeats of 'training'


# ------Prepare to start Routine "EndTraining"-------
continueRoutine = True
# update component parameters for each repeat
endResp_t.keys = []
endResp_t.rt = []
_endResp_t_allKeys = []
# keep track of which components have finished
EndTrainingComponents = [endResp_t, endInstr_t]
for thisComponent in EndTrainingComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndTrainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "EndTraining"-------
while continueRoutine:
    # get current time
    t = EndTrainingClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndTrainingClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *endResp_t* updates
    waitOnFlip = False
    if endResp_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endResp_t.frameNStart = frameN  # exact frame index
        endResp_t.tStart = t  # local t and not account for scr refresh
        endResp_t.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endResp_t, 'tStartRefresh')  # time at next scr refresh
        endResp_t.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(endResp_t.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(endResp_t.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if endResp_t.status == STARTED and not waitOnFlip:
        theseKeys = endResp_t.getKeys(keyList=['space'], waitRelease=False)
        _endResp_t_allKeys.extend(theseKeys)
        if len(_endResp_t_allKeys):
            endResp_t.keys = _endResp_t_allKeys[-1].name  # just the last key pressed
            endResp_t.rt = _endResp_t_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *endInstr_t* updates
    if endInstr_t.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endInstr_t.frameNStart = frameN  # exact frame index
        endInstr_t.tStart = t  # local t and not account for scr refresh
        endInstr_t.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endInstr_t, 'tStartRefresh')  # time at next scr refresh
        endInstr_t.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndTrainingComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "EndTraining"-------
for thisComponent in EndTrainingComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('endInstr_t.started', endInstr_t.tStartRefresh)
thisExp.addData('endInstr_t.stopped', endInstr_t.tStopRefresh)
# the Routine "EndTraining" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr_colorpoints"-------
continueRoutine = True
# update component parameters for each repeat
startResp_e.keys = []
startResp_e.rt = []
_startResp_e_allKeys = []
# keep track of which components have finished
instr_colorpointsComponents = [startInstr_e, startResp_e, polygon1, polygon2, polygon3, polygon4, polygon5, polygon1Points, polygon2Points, polygon3Points, polygon4Points, polygon5Points]
for thisComponent in instr_colorpointsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_colorpointsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_colorpoints"-------
while continueRoutine:
    # get current time
    t = instr_colorpointsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_colorpointsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *startInstr_e* updates
    if startInstr_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        startInstr_e.frameNStart = frameN  # exact frame index
        startInstr_e.tStart = t  # local t and not account for scr refresh
        startInstr_e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(startInstr_e, 'tStartRefresh')  # time at next scr refresh
        startInstr_e.setAutoDraw(True)
    
    # *startResp_e* updates
    waitOnFlip = False
    if startResp_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        startResp_e.frameNStart = frameN  # exact frame index
        startResp_e.tStart = t  # local t and not account for scr refresh
        startResp_e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(startResp_e, 'tStartRefresh')  # time at next scr refresh
        startResp_e.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(startResp_e.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(startResp_e.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if startResp_e.status == STARTED and not waitOnFlip:
        theseKeys = startResp_e.getKeys(keyList=['space'], waitRelease=False)
        _startResp_e_allKeys.extend(theseKeys)
        if len(_startResp_e_allKeys):
            startResp_e.keys = _startResp_e_allKeys[-1].name  # just the last key pressed
            startResp_e.rt = _startResp_e_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *polygon1* updates
    if polygon1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon1.frameNStart = frameN  # exact frame index
        polygon1.tStart = t  # local t and not account for scr refresh
        polygon1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon1, 'tStartRefresh')  # time at next scr refresh
        polygon1.setAutoDraw(True)
    
    # *polygon2* updates
    if polygon2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon2.frameNStart = frameN  # exact frame index
        polygon2.tStart = t  # local t and not account for scr refresh
        polygon2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon2, 'tStartRefresh')  # time at next scr refresh
        polygon2.setAutoDraw(True)
    
    # *polygon3* updates
    if polygon3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon3.frameNStart = frameN  # exact frame index
        polygon3.tStart = t  # local t and not account for scr refresh
        polygon3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon3, 'tStartRefresh')  # time at next scr refresh
        polygon3.setAutoDraw(True)
    
    # *polygon4* updates
    if polygon4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon4.frameNStart = frameN  # exact frame index
        polygon4.tStart = t  # local t and not account for scr refresh
        polygon4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon4, 'tStartRefresh')  # time at next scr refresh
        polygon4.setAutoDraw(True)
    
    # *polygon5* updates
    if polygon5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon5.frameNStart = frameN  # exact frame index
        polygon5.tStart = t  # local t and not account for scr refresh
        polygon5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon5, 'tStartRefresh')  # time at next scr refresh
        polygon5.setAutoDraw(True)
    
    # *polygon1Points* updates
    if polygon1Points.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon1Points.frameNStart = frameN  # exact frame index
        polygon1Points.tStart = t  # local t and not account for scr refresh
        polygon1Points.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon1Points, 'tStartRefresh')  # time at next scr refresh
        polygon1Points.setAutoDraw(True)
    
    # *polygon2Points* updates
    if polygon2Points.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon2Points.frameNStart = frameN  # exact frame index
        polygon2Points.tStart = t  # local t and not account for scr refresh
        polygon2Points.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon2Points, 'tStartRefresh')  # time at next scr refresh
        polygon2Points.setAutoDraw(True)
    
    # *polygon3Points* updates
    if polygon3Points.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon3Points.frameNStart = frameN  # exact frame index
        polygon3Points.tStart = t  # local t and not account for scr refresh
        polygon3Points.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon3Points, 'tStartRefresh')  # time at next scr refresh
        polygon3Points.setAutoDraw(True)
    
    # *polygon4Points* updates
    if polygon4Points.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon4Points.frameNStart = frameN  # exact frame index
        polygon4Points.tStart = t  # local t and not account for scr refresh
        polygon4Points.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon4Points, 'tStartRefresh')  # time at next scr refresh
        polygon4Points.setAutoDraw(True)
    
    # *polygon5Points* updates
    if polygon5Points.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon5Points.frameNStart = frameN  # exact frame index
        polygon5Points.tStart = t  # local t and not account for scr refresh
        polygon5Points.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon5Points, 'tStartRefresh')  # time at next scr refresh
        polygon5Points.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_colorpointsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_colorpoints"-------
for thisComponent in instr_colorpointsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr_colorpoints" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "break_warning"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_break_warning.keys = []
key_resp_break_warning.rt = []
_key_resp_break_warning_allKeys = []
# keep track of which components have finished
break_warningComponents = [key_resp_break_warning, text_break_warning]
for thisComponent in break_warningComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
break_warningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "break_warning"-------
while continueRoutine:
    # get current time
    t = break_warningClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=break_warningClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_break_warning* updates
    waitOnFlip = False
    if key_resp_break_warning.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_break_warning.frameNStart = frameN  # exact frame index
        key_resp_break_warning.tStart = t  # local t and not account for scr refresh
        key_resp_break_warning.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_break_warning, 'tStartRefresh')  # time at next scr refresh
        key_resp_break_warning.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_break_warning.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_break_warning.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_break_warning.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_break_warning.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_break_warning_allKeys.extend(theseKeys)
        if len(_key_resp_break_warning_allKeys):
            key_resp_break_warning.keys = _key_resp_break_warning_allKeys[-1].name  # just the last key pressed
            key_resp_break_warning.rt = _key_resp_break_warning_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_break_warning* updates
    if text_break_warning.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_break_warning.frameNStart = frameN  # exact frame index
        text_break_warning.tStart = t  # local t and not account for scr refresh
        text_break_warning.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_break_warning, 'tStartRefresh')  # time at next scr refresh
        text_break_warning.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in break_warningComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "break_warning"-------
for thisComponent in break_warningComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "break_warning" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('chooseBlock.xlsx'),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    experiment = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(condsFile),
        seed=None, name='experiment')
    thisExp.addLoop(experiment)  # add the loop to the experiment
    thisExperiment = experiment.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisExperiment.rgb)
    if thisExperiment != None:
        for paramName in thisExperiment:
            exec('{} = thisExperiment[paramName]'.format(paramName))
    
    for thisExperiment in experiment:
        currentLoop = experiment
        # abbreviate parameter names if possible (e.g. rgb = thisExperiment.rgb)
        if thisExperiment != None:
            for paramName in thisExperiment:
                exec('{} = thisExperiment[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "centerMouse"-------
        continueRoutine = True
        # update component parameters for each repeat
        timeout_text_e.text = ""
        timeoutTimer.reset()
        timeoutTimer.add(60)
        # setup some python lists for storing info about the centermouse_e
        centermouse_e.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        centerMouseComponents = [timeout_text_e, centercircle, centermouse_e, centerInstr_e]
        for thisComponent in centerMouseComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        centerMouseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "centerMouse"-------
        while continueRoutine:
            # get current time
            t = centerMouseClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=centerMouseClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *timeout_text_e* updates
            if timeout_text_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                timeout_text_e.frameNStart = frameN  # exact frame index
                timeout_text_e.tStart = t  # local t and not account for scr refresh
                timeout_text_e.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(timeout_text_e, 'tStartRefresh')  # time at next scr refresh
                timeout_text_e.setAutoDraw(True)
            if timeoutTimer.getTime() >= -30:
                timeout_text_e.text = 'Timeout in ' + str(int(-timeoutTimer.getTime())) + ' secs'
            
            if timeoutTimer.getTime() >= 0:
                core.quit()
            
            # *centercircle* updates
            if centercircle.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                centercircle.frameNStart = frameN  # exact frame index
                centercircle.tStart = t  # local t and not account for scr refresh
                centercircle.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(centercircle, 'tStartRefresh')  # time at next scr refresh
                centercircle.setAutoDraw(True)
            # *centermouse_e* updates
            if centermouse_e.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                centermouse_e.frameNStart = frameN  # exact frame index
                centermouse_e.tStart = t  # local t and not account for scr refresh
                centermouse_e.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(centermouse_e, 'tStartRefresh')  # time at next scr refresh
                centermouse_e.status = STARTED
                centermouse_e.mouseClock.reset()
                prevButtonState = centermouse_e.getPressed()  # if button is down already this ISN'T a new click
            if centermouse_e.status == STARTED:  # only update if started and not finished!
                buttons = centermouse_e.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [centercircle]:
                            if obj.contains(centermouse_e):
                                gotValidClick = True
                                centermouse_e.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # *centerInstr_e* updates
            if centerInstr_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                centerInstr_e.frameNStart = frameN  # exact frame index
                centerInstr_e.tStart = t  # local t and not account for scr refresh
                centerInstr_e.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(centerInstr_e, 'tStartRefresh')  # time at next scr refresh
                centerInstr_e.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in centerMouseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "centerMouse"-------
        for thisComponent in centerMouseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        experiment.addData('timeout_text_e.started', timeout_text_e.tStartRefresh)
        experiment.addData('timeout_text_e.stopped', timeout_text_e.tStopRefresh)
        experiment.addData('centercircle.started', centercircle.tStartRefresh)
        experiment.addData('centercircle.stopped', centercircle.tStopRefresh)
        # store data for experiment (TrialHandler)
        experiment.addData('centermouse_e.started', centermouse_e.tStart)
        experiment.addData('centermouse_e.stopped', centermouse_e.tStop)
        experiment.addData('centerInstr_e.started', centerInstr_e.tStartRefresh)
        experiment.addData('centerInstr_e.stopped', centerInstr_e.tStopRefresh)
        # the Routine "centerMouse" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "startposition"-------
        continueRoutine = True
        # update component parameters for each repeat
        #set target position and colors
        targetPos =(float(targetPosX),float(targetPosY))
        if targetPoints == 5:
            targetColor = fivecolor
        elif targetPoints == 10:
            targetColor = tencolor
        elif targetPoints == 15:
            targetColor = fifteencolor
        elif targetPoints == 20:
            targetColor = twentycolor
        elif targetPoints == 100:
            targetColor = jackpotcolor
        
        #reset variables
        showTarget=False
        wingame = False
        inaccurate = False
        falseStart = False
        hitTarget = False
        distanceFromTarget = 0
        distanceFromTargetX = 0
        distanceFromTargetY = 0
        distanceFromStart = 0
        entryTime = ""
        
        #timers
        delayTime = (randint(2,6) + 0.50)/10
        startPosTimer.reset()
        startPosTimer.add(0.25)
        rtTimer.reset()
        thisExp.addData('trialType', "experiment")
        
        startPos_e_wait.setFillColor(targetColor)
        target_e_wait.setFillColor(targetColor)
        target_e_wait.setPos(targetPos)
        target_e_wait.setSize([targetsize, targetsize])
        # setup some python lists for storing info about the mouse_e_wait
        mouse_e_wait.x = []
        mouse_e_wait.y = []
        mouse_e_wait.leftButton = []
        mouse_e_wait.midButton = []
        mouse_e_wait.rightButton = []
        mouse_e_wait.time = []
        gotValidClick = False  # until a click is received
        targetPoints_e_wait.setPos(targetPos)
        targetPoints_e_wait.setText(targetPoints)
        targetPoints_e_wait.setHeight(targetsize * 3/5)
        spPoints_e_wait.setText(targetPoints)
        # keep track of which components have finished
        startpositionComponents = [startPos_e_wait, target_e_wait, mouse_e_wait, targetPoints_e_wait, spPoints_e_wait]
        for thisComponent in startpositionComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        startpositionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "startposition"-------
        while continueRoutine:
            # get current time
            t = startpositionClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=startpositionClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            if not startPos_e_wait.contains(mouse_e_wait): 
                falseStart = True
                actionTime = rtTimer.getTime()
                thisExp.addData('actionTime', actionTime)
                thisExp.addData('reactionTime', actionTime-delayTime-0.25)
                thisExp.addData('duration', actionTime)
                continueRoutine = False
            elif showTarget == False and startPosTimer.getTime() >= 0:
                showTarget = True
                delayTimer.reset()
                delayTimer.add(delayTime)
            elif showTarget == True and delayTimer.getTime() >= 0:
                continueRoutine = False
            
            # *startPos_e_wait* updates
            if startPos_e_wait.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                startPos_e_wait.frameNStart = frameN  # exact frame index
                startPos_e_wait.tStart = t  # local t and not account for scr refresh
                startPos_e_wait.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(startPos_e_wait, 'tStartRefresh')  # time at next scr refresh
                startPos_e_wait.setAutoDraw(True)
            
            # *target_e_wait* updates
            if target_e_wait.status == NOT_STARTED and showTarget:
                # keep track of start time/frame for later
                target_e_wait.frameNStart = frameN  # exact frame index
                target_e_wait.tStart = t  # local t and not account for scr refresh
                target_e_wait.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target_e_wait, 'tStartRefresh')  # time at next scr refresh
                target_e_wait.setAutoDraw(True)
            # *mouse_e_wait* updates
            if mouse_e_wait.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_e_wait.frameNStart = frameN  # exact frame index
                mouse_e_wait.tStart = t  # local t and not account for scr refresh
                mouse_e_wait.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_e_wait, 'tStartRefresh')  # time at next scr refresh
                mouse_e_wait.status = STARTED
                mouse_e_wait.mouseClock.reset()
                prevButtonState = mouse_e_wait.getPressed()  # if button is down already this ISN'T a new click
            if mouse_e_wait.status == STARTED:  # only update if started and not finished!
                x, y = mouse_e_wait.getPos()
                mouse_e_wait.x.append(x)
                mouse_e_wait.y.append(y)
                buttons = mouse_e_wait.getPressed()
                mouse_e_wait.leftButton.append(buttons[0])
                mouse_e_wait.midButton.append(buttons[1])
                mouse_e_wait.rightButton.append(buttons[2])
                mouse_e_wait.time.append(mouse_e_wait.mouseClock.getTime())
            
            # *targetPoints_e_wait* updates
            if targetPoints_e_wait.status == NOT_STARTED and showTarget:
                # keep track of start time/frame for later
                targetPoints_e_wait.frameNStart = frameN  # exact frame index
                targetPoints_e_wait.tStart = t  # local t and not account for scr refresh
                targetPoints_e_wait.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(targetPoints_e_wait, 'tStartRefresh')  # time at next scr refresh
                targetPoints_e_wait.setAutoDraw(True)
            
            # *spPoints_e_wait* updates
            if spPoints_e_wait.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                spPoints_e_wait.frameNStart = frameN  # exact frame index
                spPoints_e_wait.tStart = t  # local t and not account for scr refresh
                spPoints_e_wait.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(spPoints_e_wait, 'tStartRefresh')  # time at next scr refresh
                spPoints_e_wait.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in startpositionComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "startposition"-------
        for thisComponent in startpositionComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        experiment.addData('startPos_e_wait.started', startPos_e_wait.tStartRefresh)
        experiment.addData('startPos_e_wait.stopped', startPos_e_wait.tStopRefresh)
        experiment.addData('target_e_wait.started', target_e_wait.tStartRefresh)
        experiment.addData('target_e_wait.stopped', target_e_wait.tStopRefresh)
        # store data for experiment (TrialHandler)
        experiment.addData('mouse_e_wait.x', mouse_e_wait.x)
        experiment.addData('mouse_e_wait.y', mouse_e_wait.y)
        experiment.addData('mouse_e_wait.leftButton', mouse_e_wait.leftButton)
        experiment.addData('mouse_e_wait.midButton', mouse_e_wait.midButton)
        experiment.addData('mouse_e_wait.rightButton', mouse_e_wait.rightButton)
        experiment.addData('mouse_e_wait.time', mouse_e_wait.time)
        experiment.addData('mouse_e_wait.started', mouse_e_wait.tStart)
        experiment.addData('mouse_e_wait.stopped', mouse_e_wait.tStop)
        experiment.addData('targetPoints_e_wait.started', targetPoints_e_wait.tStartRefresh)
        experiment.addData('targetPoints_e_wait.stopped', targetPoints_e_wait.tStopRefresh)
        experiment.addData('spPoints_e_wait.started', spPoints_e_wait.tStartRefresh)
        experiment.addData('spPoints_e_wait.stopped', spPoints_e_wait.tStopRefresh)
        # the Routine "startposition" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        reachTimer.reset()
        reachTimer.add(0.7)
        stay = False
        rtRecorded = False
        entryRecorded = False
        # setup some python lists for storing info about the mouse_e_reach
        mouse_e_reach.x = []
        mouse_e_reach.y = []
        mouse_e_reach.leftButton = []
        mouse_e_reach.midButton = []
        mouse_e_reach.rightButton = []
        mouse_e_reach.time = []
        gotValidClick = False  # until a click is received
        target_e_reach.setFillColor(targetColor)
        target_e_reach.setPos(targetPos)
        target_e_reach.setSize([targetsize, targetsize])
        targetPoints_e_reach.setPos(targetPos)
        targetPoints_e_reach.setText(targetPoints)
        targetPoints_e_reach.setHeight(targetsize * 3/5)
        # keep track of which components have finished
        trialComponents = [invis_startPos_e, mouse_e_reach, target_e_reach, targetPoints_e_reach]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *invis_startPos_e* updates
            if invis_startPos_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                invis_startPos_e.frameNStart = frameN  # exact frame index
                invis_startPos_e.tStart = t  # local t and not account for scr refresh
                invis_startPos_e.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(invis_startPos_e, 'tStartRefresh')  # time at next scr refresh
                invis_startPos_e.setAutoDraw(True)
            if falseStart == True: 
                outcome = "0 points\n\nYou moved before the center circle disappeared"
                continueRoutine = False
            elif invis_startPos_e.contains(mouse_e_reach) == False and rtRecorded == False:
                rtRecorded = True
                actionTime = rtTimer.getTime()
                thisExp.addData('actionTime', actionTime)
                thisExp.addData('reactionTime', actionTime-delayTime-0.25)
            if target_e_reach.contains(mouse_e_reach) == False:
                stay = False
                if reachTimer.getTime() >= 0:
                    duration = rtTimer.getTime()
                    thisExp.addData('duration', duration)
                    inaccurate = True
                    outcome = "0 points"
                    mousex = mouse_e_reach.getPos()[0]
                    mousey = mouse_e_reach.getPos()[1]
                    continueRoutine = False
            elif target_e_reach.contains(mouse_e_reach) == True and stay == False:
                if entryRecorded == False:
                    entryTime = rtTimer.getTime()
                    thisExp.addData('entryTime', entryTime)
                    entryRecorded = True
                stay = True
                hitTarget = True
                winTimer.reset()
                winTimer.add(0.3)
            else:
                if winTimer.getTime() >= 0:
                    duration = rtTimer.getTime()
                    thisExp.addData('duration', duration)
                    wingame = True
                    outcome = "+" + str(targetPoints) + " points!"
                    mousex = mouse_e_reach.getPos()[0]
                    mousey = mouse_e_reach.getPos()[1]
                    continueRoutine = False
            # *mouse_e_reach* updates
            if mouse_e_reach.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_e_reach.frameNStart = frameN  # exact frame index
                mouse_e_reach.tStart = t  # local t and not account for scr refresh
                mouse_e_reach.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_e_reach, 'tStartRefresh')  # time at next scr refresh
                mouse_e_reach.status = STARTED
                mouse_e_reach.mouseClock.reset()
                prevButtonState = mouse_e_reach.getPressed()  # if button is down already this ISN'T a new click
            if mouse_e_reach.status == STARTED:  # only update if started and not finished!
                x, y = mouse_e_reach.getPos()
                mouse_e_reach.x.append(x)
                mouse_e_reach.y.append(y)
                buttons = mouse_e_reach.getPressed()
                mouse_e_reach.leftButton.append(buttons[0])
                mouse_e_reach.midButton.append(buttons[1])
                mouse_e_reach.rightButton.append(buttons[2])
                mouse_e_reach.time.append(mouse_e_reach.mouseClock.getTime())
            
            # *target_e_reach* updates
            if target_e_reach.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                target_e_reach.frameNStart = frameN  # exact frame index
                target_e_reach.tStart = t  # local t and not account for scr refresh
                target_e_reach.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target_e_reach, 'tStartRefresh')  # time at next scr refresh
                target_e_reach.setAutoDraw(True)
            
            # *targetPoints_e_reach* updates
            if targetPoints_e_reach.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                targetPoints_e_reach.frameNStart = frameN  # exact frame index
                targetPoints_e_reach.tStart = t  # local t and not account for scr refresh
                targetPoints_e_reach.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(targetPoints_e_reach, 'tStartRefresh')  # time at next scr refresh
                targetPoints_e_reach.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('delayTime', delayTime)
        thisExp.addData('targetsize', targetsize)
        if wingame:
            thisExp.addData('wingame', 1)
        else:
            thisExp.addData('wingame', 0)
        if inaccurate:
            thisExp.addData('inaccurate', 1)
        else:
            thisExp.addData('inaccurate', 0)
        if falseStart: 
            thisExp.addData('falseStart', 1)
        else:
            thisExp.addData('falseStart', 0)
        if hitTarget:
            thisExp.addData('hitTarget', 1)
        else:
            thisExp.addData('hitTarget', 0)
        thisExp.addData('finalpos', str(mousex) + "," + str(mousey))
        
        
        # store data for experiment (TrialHandler)
        experiment.addData('mouse_e_reach.x', mouse_e_reach.x)
        experiment.addData('mouse_e_reach.y', mouse_e_reach.y)
        experiment.addData('mouse_e_reach.leftButton', mouse_e_reach.leftButton)
        experiment.addData('mouse_e_reach.midButton', mouse_e_reach.midButton)
        experiment.addData('mouse_e_reach.rightButton', mouse_e_reach.rightButton)
        experiment.addData('mouse_e_reach.time', mouse_e_reach.time)
        experiment.addData('mouse_e_reach.started', mouse_e_reach.tStart)
        experiment.addData('mouse_e_reach.stopped', mouse_e_reach.tStop)
        experiment.addData('target_e_reach.started', target_e_reach.tStartRefresh)
        experiment.addData('target_e_reach.stopped', target_e_reach.tStopRefresh)
        experiment.addData('targetPoints_e_reach.started', targetPoints_e_reach.tStartRefresh)
        experiment.addData('targetPoints_e_reach.stopped', targetPoints_e_reach.tStopRefresh)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        #Record earned points
        if wingame == True:
            blockpoints += targetPoints
        
        #if falseStart, don't show feedback
        if falseStart == True:
            tcolor = 'grey'
            mcolor = 'grey'
            textcolor = 'grey'
        else:
            tcolor = targetColor
            mcolor = 'black'
            textcolor = 'black'
        outcome_e.setText(outcome)
        target_e_outcome.setFillColor(tcolor)
        target_e_outcome.setPos(targetPos)
        target_e_outcome.setSize([targetsize, targetsize])
        targetPoints_e_reach_2.setColor(textcolor, colorSpace='rgb')
        targetPoints_e_reach_2.setPos(targetPos)
        targetPoints_e_reach_2.setText(targetPoints)
        targetPoints_e_reach_2.setHeight(targetsize * 3/5)
        mousepos_e.setFillColor(mcolor)
        mousepos_e.setPos((mousex, mousey))
        distanceFromTargetX = abs(targetPos[0]-mousex)
        distanceFromTargetY = abs(targetPos[1]-mousey)
        distanceFromTarget = sqrt(distanceFromTargetX**2+distanceFromTargetY**2) - targetsize/2
        
        thisExp.addData('distanceFromTarget', distanceFromTarget)
        
        
        distanceFromStart = sqrt(abs(mousex)**2+abs(mousey)**2) - 0.025
        
        thisExp.addData('distanceFromStart', distanceFromStart)
        # keep track of which components have finished
        feedbackComponents = [outcome_e, target_e_outcome, targetPoints_e_reach_2, mousepos_e]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *outcome_e* updates
            if outcome_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                outcome_e.frameNStart = frameN  # exact frame index
                outcome_e.tStart = t  # local t and not account for scr refresh
                outcome_e.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(outcome_e, 'tStartRefresh')  # time at next scr refresh
                outcome_e.setAutoDraw(True)
            if outcome_e.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > outcome_e.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    outcome_e.tStop = t  # not accounting for scr refresh
                    outcome_e.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(outcome_e, 'tStopRefresh')  # time at next scr refresh
                    outcome_e.setAutoDraw(False)
            
            # *target_e_outcome* updates
            if target_e_outcome.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                target_e_outcome.frameNStart = frameN  # exact frame index
                target_e_outcome.tStart = t  # local t and not account for scr refresh
                target_e_outcome.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target_e_outcome, 'tStartRefresh')  # time at next scr refresh
                target_e_outcome.setAutoDraw(True)
            if target_e_outcome.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > target_e_outcome.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    target_e_outcome.tStop = t  # not accounting for scr refresh
                    target_e_outcome.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(target_e_outcome, 'tStopRefresh')  # time at next scr refresh
                    target_e_outcome.setAutoDraw(False)
            
            # *targetPoints_e_reach_2* updates
            if targetPoints_e_reach_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                targetPoints_e_reach_2.frameNStart = frameN  # exact frame index
                targetPoints_e_reach_2.tStart = t  # local t and not account for scr refresh
                targetPoints_e_reach_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(targetPoints_e_reach_2, 'tStartRefresh')  # time at next scr refresh
                targetPoints_e_reach_2.setAutoDraw(True)
            if targetPoints_e_reach_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > targetPoints_e_reach_2.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    targetPoints_e_reach_2.tStop = t  # not accounting for scr refresh
                    targetPoints_e_reach_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(targetPoints_e_reach_2, 'tStopRefresh')  # time at next scr refresh
                    targetPoints_e_reach_2.setAutoDraw(False)
            
            # *mousepos_e* updates
            if mousepos_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mousepos_e.frameNStart = frameN  # exact frame index
                mousepos_e.tStart = t  # local t and not account for scr refresh
                mousepos_e.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mousepos_e, 'tStartRefresh')  # time at next scr refresh
                mousepos_e.setAutoDraw(True)
            if mousepos_e.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mousepos_e.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    mousepos_e.tStop = t  # not accounting for scr refresh
                    mousepos_e.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mousepos_e, 'tStopRefresh')  # time at next scr refresh
                    mousepos_e.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback"-------
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'experiment'
    
    
    # ------Prepare to start Routine "blockbreak"-------
    continueRoutine = True
    # update component parameters for each repeat
    index += 1
    totalpoints += blockpoints
    blockbreaktext.text = "Block " + str(index) + " complete.\n" + "You earned " + str(blockpoints) + " points this block.\nYou can take a 1-minute break now if you'd like.\n\n" + "When you are ready, press the space bar to proceed"
    
    timeoutTimer.reset()
    timeoutTimer.add(90)
    key_resp_blockbreak.keys = []
    key_resp_blockbreak.rt = []
    _key_resp_blockbreak_allKeys = []
    # keep track of which components have finished
    blockbreakComponents = [blockbreaktext, timeout_text_break, key_resp_blockbreak]
    for thisComponent in blockbreakComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    blockbreakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "blockbreak"-------
    while continueRoutine:
        # get current time
        t = blockbreakClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=blockbreakClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *blockbreaktext* updates
        if blockbreaktext.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            blockbreaktext.frameNStart = frameN  # exact frame index
            blockbreaktext.tStart = t  # local t and not account for scr refresh
            blockbreaktext.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(blockbreaktext, 'tStartRefresh')  # time at next scr refresh
            blockbreaktext.setAutoDraw(True)
        
        # *timeout_text_break* updates
        if timeout_text_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            timeout_text_break.frameNStart = frameN  # exact frame index
            timeout_text_break.tStart = t  # local t and not account for scr refresh
            timeout_text_break.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(timeout_text_break, 'tStartRefresh')  # time at next scr refresh
            timeout_text_break.setAutoDraw(True)
        if timeoutTimer.getTime() >= -30:
            timeout_text_break.text = 'Timeout in ' + str(int(-timeoutTimer.getTime())) + ' secs'
        
        if timeoutTimer.getTime() >= 0:
            core.quit()
        
        # *key_resp_blockbreak* updates
        waitOnFlip = False
        if key_resp_blockbreak.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_blockbreak.frameNStart = frameN  # exact frame index
            key_resp_blockbreak.tStart = t  # local t and not account for scr refresh
            key_resp_blockbreak.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_blockbreak, 'tStartRefresh')  # time at next scr refresh
            key_resp_blockbreak.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_blockbreak.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_blockbreak.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_blockbreak.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_blockbreak.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_blockbreak_allKeys.extend(theseKeys)
            if len(_key_resp_blockbreak_allKeys):
                key_resp_blockbreak.keys = _key_resp_blockbreak_allKeys[-1].name  # just the last key pressed
                key_resp_blockbreak.rt = _key_resp_blockbreak_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blockbreakComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "blockbreak"-------
    for thisComponent in blockbreakComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blockpoints = 0
    timeout_text_break.text = ""
    # the Routine "blockbreak" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'blocks'


# ------Prepare to start Routine "outcomes"-------
continueRoutine = True
# update component parameters for each repeat
msg = "This is the end of the experiment. "
pointmsg = "You earned a total of " + str(totalpoints) + " points. Thank you for your participation!\n\nPress the space bar to exit"

outcomemsg = msg + pointmsg
thisExp.addData("totalpoints", totalpoints)
endOutcome_e.setText(outcomemsg)
endResp_e.keys = []
endResp_e.rt = []
_endResp_e_allKeys = []
# keep track of which components have finished
outcomesComponents = [endOutcome_e, endResp_e]
for thisComponent in outcomesComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
outcomesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "outcomes"-------
while continueRoutine:
    # get current time
    t = outcomesClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=outcomesClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *endOutcome_e* updates
    if endOutcome_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endOutcome_e.frameNStart = frameN  # exact frame index
        endOutcome_e.tStart = t  # local t and not account for scr refresh
        endOutcome_e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endOutcome_e, 'tStartRefresh')  # time at next scr refresh
        endOutcome_e.setAutoDraw(True)
    
    # *endResp_e* updates
    waitOnFlip = False
    if endResp_e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endResp_e.frameNStart = frameN  # exact frame index
        endResp_e.tStart = t  # local t and not account for scr refresh
        endResp_e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endResp_e, 'tStartRefresh')  # time at next scr refresh
        endResp_e.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(endResp_e.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(endResp_e.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if endResp_e.status == STARTED and not waitOnFlip:
        theseKeys = endResp_e.getKeys(keyList=['space'], waitRelease=False)
        _endResp_e_allKeys.extend(theseKeys)
        if len(_endResp_e_allKeys):
            endResp_e.keys = _endResp_e_allKeys[-1].name  # just the last key pressed
            endResp_e.rt = _endResp_e_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in outcomesComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "outcomes"-------
for thisComponent in outcomesComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "outcomes" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
