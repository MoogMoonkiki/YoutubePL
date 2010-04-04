/*
---
description: A plugin to build a video Playlist using Mootools and Google API.

license: MIT-style

authors:
- Nunzio Fiore 

requires:
- Mootools 1.2.4
- Mootools more Elements.from function.

*/

            var YoutubePL = new Class({
            
                Implements: [Options, Events],
                options: {select:'',
						  videoContainer:'demoContainer',
						  videos:null},
                initialize: function(options){
                    this.setOptions(options);
					if (this.options.select==""){
						this.buildSelect();
					}
                },
				
				buildSelect:function(){
					var vc = this.options.videoContainer;
					var tpl='<div id="videoControls'+vc+'" style="float:left;margin:2px;">\
                        <select id="videoSelection'+vc+'">\
                        </select>\
                    </div>';
					new Elements.from(tpl).inject($(vc),'before');
					var v = this.options.videos;
					v.each(function(el,i){
						$('videoSelection'+vc).grab(new Element('option',{
							'value':el,
							'html':' Video'+(i+1)
						}));
					});
					this.options.select='videoSelection'+vc;

				},
                
                updateHTML: function(elmId, value){
                    $(elmId).set('html', value);
                },
                
                loadVideo: function(){
                    var selectBox = $(this.options.select);
                    var videoID = selectBox.get('value');
                    ytplayer = $("ytPlayer"+this.options.videoContainer);
					if (ytplayer) {
                        ytplayer.loadVideoById(videoID);
                    }
                },
                
                onYouTubePlayerReady: function(playerId){
                    ytplayer = $("ytPlayer"+this.options.videoContainer);
                    ytplayer.addEvent("error", function(errorCode){
                        alert("An error occured of type:" + errorCode);
                    });
                },
                
                loadPlayer: function(){
                    var obj=this;
					var videoID = $(obj.options.select).get('value');
					
                    var params = {
                        allowScriptAccess: "always"
                    };
                    var atts = {
                        id: "ytPlayer"+obj.options.videoContainer
                    };
                    swfobject.embedSWF("http://www.youtube.com/v/" + videoID +
                    "&enablejsapi=1&playerapiid=player1", obj.options.videoContainer, "280", "195", "8", null, null, params, atts);
                },
                
                run: function(){
                    var obj = this;
                    $(obj.options.select).addEvent('change', function(e){
                        obj.loadVideo();
                    });
                    
                    obj.loadPlayer();
                }
                
            });
            
