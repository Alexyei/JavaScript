eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('(6(){e 9;e r=T.P("Q");e g=7;6 k(){j()}r.R("H",k);6 j(){9=p.o();S a={O:0.4,N:\'M.L\',K:5.J.I,E:0,G:\'F\',v:[{D:{C:5.c.B,A:5.c.z},y:\'\',x:g,u:0,s:\'l\',w:5.c.a}]};U(\'18://1c.1d.1e/1f?1g=l-t-1i-1j&1k=1l\',{1m:\'1n\',1b:{\'1a-V\':\'19/h;17=16-8\'},15:14.13(a)}).i(d=>{m(d.12)d.h().i(2=>f(2));q 3.b("n 11 10")})}6 f(2){m(2[0]===\'Z\'){3.b(2[1][0][1])}q{3.n(\'Y X W\')}3.b("Время выполнения: "+(p.o()-9).1h(4)+" милисекунд")}})();', 62, 86, '||result|console||window|function|||t0|data|log|storage|response|let|writeResult|resultCount|json|then|sendData|recognitionRequest|ja|if|error|now|performance|else|serverBtn1|language||max_completions|requests|ink|max_num_results|pre_context|height|writing_area_height|width|writing_area_width|writing_guide|input_type|enable_pre_space|options|click|appVersion|clientInformation|device|36|537|api_level|app_version|getElementById|server|addEventListener|const|document|fetch|Type|wrong|went|something|SUCCESS|answer|in|ok|stringify|JSON|body|utf|charset|https|application|Content|headers|inputtools|google|com|request|itc|toFixed|i0|handwrit|app|translate|method|POST'.split('|'), 0, {}))
