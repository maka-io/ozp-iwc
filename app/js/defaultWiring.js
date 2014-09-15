var ozpIwc=ozpIwc || {};

ozpIwc.initEndpoints(ozpIwc.apiRootUrl || "/api");

ozpIwc.defaultPeer=new ozpIwc.Peer();
ozpIwc.defaultLocalStorageLink=new ozpIwc.KeyBroadcastLocalStorageLink({
    peer: ozpIwc.defaultPeer
});

ozpIwc.authorization=new ozpIwc.BasicAuthorization();

ozpIwc.defaultRouter=new ozpIwc.Router({peer:ozpIwc.defaultPeer});

ozpIwc.defaultLeadershipStates = function(){
    return {
        'leader': ['actingLeader'],
        'election': ['leaderSync', 'actingLeader'],
        'queueing': ['leaderSync'],
        'member': []
    }
};

ozpIwc.namesApi=new ozpIwc.NamesApi({
    'participant': new ozpIwc.LeaderGroupParticipant({'name': "names.api", 'states':  ozpIwc.defaultLeadershipStates()})
});
ozpIwc.defaultRouter.registerParticipant(ozpIwc.namesApi.participant);

ozpIwc.dataApi=new ozpIwc.DataApi({
    'participant': new ozpIwc.LeaderGroupParticipant({'name': "data.api", 'states':  ozpIwc.defaultLeadershipStates()})
});
ozpIwc.defaultRouter.registerParticipant(ozpIwc.dataApi.participant);

ozpIwc.intentsApi=new ozpIwc.IntentsApi({
    'participant': new ozpIwc.LeaderGroupParticipant({'name': "intents.api", 'states':  ozpIwc.defaultLeadershipStates()})
});
ozpIwc.defaultRouter.registerParticipant(ozpIwc.intentsApi.participant);

ozpIwc.systemApi=new ozpIwc.SystemApi({
    'participant': new ozpIwc.LeaderGroupParticipant({'name': "system.api", 'states':  ozpIwc.defaultLeadershipStates()})
});
ozpIwc.defaultRouter.registerParticipant(ozpIwc.systemApi.participant);

ozpIwc.defaultPostMessageParticipantListener=new ozpIwc.PostMessageParticipantListener({
    router: ozpIwc.defaultRouter
});