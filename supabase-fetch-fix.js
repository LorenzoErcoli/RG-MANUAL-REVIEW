(function(){
  const nativeFetch=window.fetch.bind(window);
  window.fetch=function(input,init={}){
    const url=typeof input==='string'?input:(input&&input.url)||'';
    const cfg=window.RG_SUPABASE;
    if(cfg&&url.startsWith(cfg.restUrl)){
      const headers=new Headers(init.headers||{});
      headers.delete('Authorization');
      headers.set('apikey',cfg.publishableKey);
      headers.set('Content-Type','application/json');
      headers.set('Prefer','return=minimal');
      const cleanUrl=url.replace(/\?on_conflict=event_id(?:&|$)/,'?').replace(/\?$/,'');
      return nativeFetch(cleanUrl,{...init,headers});
    }
    return nativeFetch(input,init);
  };
})();
