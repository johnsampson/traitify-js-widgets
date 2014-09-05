this.Traitify=new function(){return this.host="https://api.traitify.com",this.version="v1",this.testMode=!1,this.setTestMode=function(t){return this.testMode=t,this},this.setHost=function(t){return t=t.replace("http://","").replace("https://",""),t="https://"+t,this.host=t,this},this.setPublicKey=function(t){return this.publicKey=t,this},this.setVersion=function(t){return this.version=t,this},this.ajax=function(t,s,e,i){var n;return t=""+this.host+"/"+this.version+t,n=new XMLHttpRequest,"withCredentials"in n?n.open(s,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest,n.open(s,t)):(console.log("There was an error making the request."),n=null),n.open(s,t,!0),n.setRequestHeader("Authorization","Basic "+btoa(this.publicKey+":x")),n.setRequestHeader("Content-type","application/json"),n.setRequestHeader("Accept","application/json"),n.onload=function(){var t;return t=JSON.parse(n.response),e(t),!1},n.send(i),this},this.put=function(t,s,e){return this.ajax(t,"PUT",e,s),this},this.get=function(t,s){return this.ajax(t,"GET",s,""),this},this.getDecks=function(t){return this.get("/decks",function(s){return t(s)}),this},this.getSlides=function(t,s){return this.get("/assessments/"+t+"/slides",function(t){return s(t)}),this},this.addSlide=function(t,s,e,i,n){return this.put("/assessments/"+t+"/slides/"+s,JSON.stringify({response:e,time_taken:i}),function(t){return n(t)}),this},this.addSlides=function(t,s,e){return this.put("/assessments/"+t+"/slides",JSON.stringify(s),function(t){return e(t)}),this},this.getPersonalityTypes=function(t,s){return this.get("/assessments/"+t+"/personality_types",function(t){return s(t)}),this},this.getPersonalityTraits=function(t,s){return this.get("/assessments/"+t+"/personality_traits",function(t){return s(t)}),this},this.getPersonalityTypesTraits=function(t,s,e){return this.get("/assessments/"+t+"/personality_types/"+s+"/personality_traits",function(t){return e(t)}),this},this.ui=Object(),this};