import AnonWhiteboard from "./Modules/AnonWhiteboard";
import AutoRejoin from "./Modules/AutoRejoin";
import AutoUnmute from "./Modules/autoUnmute";
import BotMeeting from "./Modules/BotMeeting";
import ChatSpammer from "./Modules/ChatSpammer";
import FloodMeeting from "./Modules/FloodMeeting";
import ForceHostKey from "./Modules/ForceHostKey";
import HandSpammer from "./Modules/HandSpammer";
import HideNotifications from "./Modules/HideNotifications";
import HideReactions from "./Modules/HideReactions";
import NameSpammer from "./Modules/nameSpammer";
import ReactionSpammer from "./Modules/reactionSpammer";
import RecordMembers from "./Modules/RecordMembers";
import SpamRequestAI from "./Modules/SpamRequestAI";
import SpamSSControl from "./Modules/SpamSSControl";
import SDK from "./SDK/SDK"
import Panel from "./UI/Panel"

let alreadyInjected = !!top?.Niggerware || window?.Niggerbot;

if (!alreadyInjected) {
    let mainSDKInstance = new SDK(document.getElementById("webclient")?.contentWindow || window);

    window.Niggerware = mainSDKInstance;

    window.spammerSpeed = 1;

    let ThugwarePanel = new Panel("NIGGERWARE", true);
    ThugwarePanel.addButton("Hand Spammer", HandSpammer.bind(mainSDKInstance));
    ThugwarePanel.addButton("Name Spammer", NameSpammer.bind(mainSDKInstance));
    ThugwarePanel.addButton("Reaction Spammer", ReactionSpammer.bind(mainSDKInstance));
    ThugwarePanel.addButton("Auto Unmute", AutoUnmute.bind(mainSDKInstance));
    ThugwarePanel.addButton("Chat Spammer", ChatSpammer.bind(mainSDKInstance));
    ThugwarePanel.addButton("Request AI Spammer", SpamRequestAI.bind(mainSDKInstance));
    ThugwarePanel.addButton("Spam Screenshare Control", SpamSSControl.bind(mainSDKInstance));
    ThugwarePanel.addButton("Auto Rejoin", AutoRejoin.bind(mainSDKInstance));
    ThugwarePanel.addButton("Bot Meeting", BotMeeting.bind(mainSDKInstance));
    ThugwarePanel.addButton("Flood Meeting", FloodMeeting.bind(mainSDKInstance));
    ThugwarePanel.addButton("Hide Notifications", HideNotifications.bind(mainSDKInstance));
    ThugwarePanel.addButton("Hide Reactions", HideReactions.bind(mainSDKInstance));
    ThugwarePanel.addButton("Record Members", RecordMembers.bind(mainSDKInstance));
    ThugwarePanel.addButton("Force Host Key", ForceHostKey.bind(mainSDKInstance));
    ThugwarePanel.addButton("Anon Whiteboard", AnonWhiteboard.bind(mainSDKInstance));
}

// auto launch meeting
if (Array.from(document.querySelectorAll('div')).find(btn => btn.textContent.trim() === 'Launch Meeting')) {
    let zoomServer = location.origin;
    let meetingID = location.pathname.replace("/j/", "");
    location.href = zoomServer + "/wc/join/" + meetingID + location.search;
}
