
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: "/",
  criticalCssPlans: [[1,"/styles-XRH7FU5J.css",19594,["*","*:before","*:after","h1","h2","h3","h4","var(--font-display)","{font-size:var(--font-size-lg)}","p","ul","ol","a","img","svg","video","address","skip-link",".split","split","{grid-template-columns:1fr 1fr}","lead","text-center","prose","li","media",".btn","btn","true","btn--outline",".btn--outline:hover","btn--ghost","btn--light","spin",".eyebrow","eyebrow",".badge","badge","check-list","chips",".card","card",".card--interactive:hover",".card--interactive:focus-within","card--interactive",".icon-tile","icon-tile","steps",".steps>li",".steps>li:before",".table-wrap","table-wrap","table","th","td","num","accordion",".accordion details","details",".accordion details[open]","open","","summary",".accordion summary:after",".accordion details[open] summary:after","accordion__body","{margin:0}",".cta-band","cta-band","alert","pagination",".form__row","form__row","field","{color:var(--color-danger)}","req","hint",".field input",".field select",".field textarea","input","select","textarea",".field input:focus-visible",".field select:focus-visible",".field textarea:focus-visible","aria-invalid","app-root","data-page","app-footer","main","main>:not(router-outlet)","page-fade","tbody","tr"],[["@media(prefers-reduced-motion:reduce){"],["@media(min-width:900px){"],["@media(min-width:640px){"],["@media(min-width:800px){"]],[[10,"@charset \"UTF-8\";"],[5,":root","{--font-sans:Montserrat, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Noto Sans\", \"Helvetica Neue\", Arial, sans-serif;--font-display:Archivo, Montserrat, ui-sans-serif, system-ui, sans-serif;--font-script:Caveat, cursive;--font-size-xs:.8125rem;--font-size-sm:.9375rem;--font-size-md:1rem;--font-size-lg:1.125rem;--font-size-xl:clamp(1.25rem, 1.1rem + .6vw, 1.5rem);--font-size-2xl:clamp(1.5rem, 1.2rem + 1.2vw, 2rem);--font-size-3xl:clamp(1.875rem, 1.4rem + 2vw, 2.75rem);--font-size-4xl:clamp(2.125rem, 1.5rem + 2.8vw, 3.5rem);--space-1:.25rem;--space-2:.5rem;--space-3:.75rem;--space-4:1rem;--space-5:1.5rem;--space-6:2rem;--space-7:3rem;--space-8:4rem;--space-section:clamp(3rem, 2rem + 4vw, 5.5rem);--radius-sm:.75rem;--radius-md:1.25rem;--radius-lg:1.75rem;--radius-pill:999px;--shadow-sm:0 4px 14px rgb(120 40 10 / .07);--shadow-md:0 20px 50px rgb(120 40 10 / .1);--shadow-lg:0 30px 60px rgb(120 40 10 / .18);--header-height:4.25rem;--container:88rem;--transition:.16s ease}",[0]],[5,":root[data-theme=cyber]","{--shadow-sm:0 1px 2px rgb(0 0 0 / .4);--shadow-md:0 8px 24px rgb(0 0 0 / .35);--shadow-lg:0 18px 50px rgb(0 0 0 / .5)}",[["",[[0,0,0,[["data-theme",1,"cyber",0]]]]]]],[5,[1,2,3],"{box-sizing:border-box}",[0,0,0]],[5,"html","{-webkit-text-size-adjust:100%;text-size-adjust:100%;scroll-padding-top:calc(var(--header-height) + 1rem)}",[0]],[37,"body","{margin:0;min-height:100vh;font-family:var(--font-sans);font-size:var(--font-size-md);line-height:1.65;color:var(--color-text);background:var(--color-bg);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}",[0],["var(--font-sans)"]],[37,[4,5,6,7],"{margin:0 0 var(--space-3);font-family:var(--font-display);line-height:1.1;font-weight:900;letter-spacing:-.01em;color:var(--color-text);text-wrap:balance}",[3,3,3,3],[8]],[5,4,"{font-size:var(--font-size-4xl)}",[3]],[5,5,"{font-size:var(--font-size-3xl)}",[3]],[5,6,"{font-size:var(--font-size-xl);letter-spacing:-.01em}",[3]],[5,7,9,[3]],[5,10,"{margin:0 0 var(--space-4);text-wrap:pretty}",[3]],[5,[11,12],"{margin:0 0 var(--space-4);padding-left:1.25rem}",[3,3]],[5,13,"{color:var(--color-primary);text-underline-offset:.2em;text-decoration-thickness:1px}",[3]],[5,"a:hover","{color:var(--color-primary-hover)}",[[0,0,[13],0]]],[5,[14,15,16],"{display:block;max-width:100%;height:auto}",[3,3,3]],[5,17,"{font-style:normal}",[3]],[21,[1,2,3],"{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}",[0,0,0],0],[5,".visually-hidden","{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}",[1]],[5,".skip-link","{position:absolute;left:var(--space-4);top:-100px;z-index:100;padding:var(--space-3) var(--space-4);background:var(--color-primary);color:var(--color-on-primary);border-radius:var(--radius-sm);font-weight:600}",[1]],[5,".skip-link:focus","{top:var(--space-3);color:var(--color-on-primary)}",[[[18],0,0,0]]],[5,".container","{width:100%;max-width:var(--container);margin-inline:auto;padding-inline:clamp(1rem,.5rem + 2.5vw,2rem)}",[1]],[5,".section","{padding-block:var(--space-section)}",[1]],[5,".section--alt","{background:var(--color-surface-alt)}",[1]],[5,".section--tight","{padding-block:clamp(2rem,1.5rem + 2vw,3.5rem)}",[1]],[5,".stack>*+*","{margin-top:var(--space-4)}",[[">+",["stack",[0,0,0,0],[0,0,0,0]]]]],[5,".grid","{display:grid;gap:var(--space-5);grid-template-columns:repeat(auto-fill,minmax(min(100%,var(--grid-min, 17rem)),1fr))}",[1]],[5,".grid--2","{--grid-min:22rem}",[1]],[5,".grid--4","{--grid-min:14rem}",[1]],[5,19,"{display:grid;gap:clamp(2rem,1rem + 4vw,4rem);align-items:center}",[1]],[21,19,21,[1],1],[21,".split--reverse>:first-child","{order:2}",[[">",["split--reverse",[0,0,0,0]]]],1],[5,".lead","{font-size:var(--font-size-lg);color:var(--color-text-muted);max-width:42rem}",[1]],[5,".muted","{color:var(--color-text-muted)}",[1]],[5,".text-center","{text-align:center}",[1]],[5,".text-center .lead","{margin-inline:auto}",[[" ",[23,22]]]],[5,".prose","{max-width:44rem;font-size:1.0625rem}",[1]],[5,".prose h2","{font-size:var(--font-size-2xl);margin-top:var(--space-7)}",[[" ",[24,[5,0,0,0]]]]],[5,".prose h3","{margin-top:var(--space-5)}",[[" ",[24,[6,0,0,0]]]]],[5,".prose li+li","{margin-top:var(--space-2)}",[[" +",[24,[25,0,0,0],[25,0,0,0]]]]],[5,".media","{position:relative;overflow:hidden;border-radius:var(--radius-md);background:var(--color-surface-alt);aspect-ratio:var(--ratio, 4/3)}",[1]],[5,".media img","{object-fit:var(--fit, cover)}",[[" ",[26,[14,0,0,0]]]]],[5,".media--contain","{--fit:contain}",[1]],[5,".media--square","{--ratio:1}",[1]],[5,".media--wide","{--ratio:16 / 9}",[1]],[5,".card-list","{list-style:none;padding:0;margin:0}",[1]],[5,27,"{--btn-bg:var(--color-primary);--btn-fg:var(--color-on-primary);--btn-border:var(--color-primary);display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);min-height:2.75rem;padding:.625rem 1.25rem;border:1.5px solid var(--btn-border);border-radius:var(--radius-pill);background:var(--btn-bg);color:var(--btn-fg);font:inherit;font-weight:700;font-size:var(--font-size-xs);letter-spacing:.14em;text-transform:uppercase;line-height:1.2;text-decoration:none;white-space:nowrap;cursor:pointer;transition:background-color var(--transition),border-color var(--transition),color var(--transition),box-shadow var(--transition)}",[1]],[5,".btn:hover","{transform:translateY(-2px);--btn-bg:var(--color-primary-hover);--btn-border:var(--color-primary-hover);color:var(--btn-fg)}",[[[28],0,0,0]]],[5,[".btn:disabled",".btn[aria-disabled=true]"],"{opacity:.6;cursor:not-allowed}",[[[28],0,0,0],["",[[0,[28],0,[["aria-disabled",1,29,0]]]]]]],[5,".btn--outline","{--btn-bg:transparent;--btn-fg:var(--color-primary)}",[1]],[5,31,"{--btn-bg:var(--color-primary-soft);--btn-border:var(--color-primary);--btn-fg:var(--color-primary-hover)}",[[[30],0,0,0]]],[5,".btn--ghost","{--btn-bg:transparent;--btn-fg:var(--color-text);--btn-border:transparent}",[1]],[5,".btn--ghost:hover","{--btn-bg:var(--color-surface-alt);--btn-border:transparent;--btn-fg:var(--color-text)}",[[[32],0,0,0]]],[5,".btn--light","{--btn-bg:var(--color-surface);--btn-fg:var(--color-primary);--btn-border:var(--color-surface)}",[1]],[5,".btn--light:hover","{--btn-bg:var(--color-primary-soft);--btn-border:var(--color-primary-soft);--btn-fg:var(--color-primary-hover)}",[[[33],0,0,0]]],[5,".btn--sm","{min-height:2.5rem;padding:.5rem .9rem}",[1]],[5,".btn--lg","{min-height:3.25rem;padding:.875rem 1.75rem;font-size:var(--font-size-md)}",[1]],[5,".btn--block","{width:100%}",[1]],[5,".btn--icon","{padding:0;width:2.75rem}",[1]],[5,".btn-row","{display:flex;flex-wrap:wrap;gap:var(--space-3)}",[1]],[69,".spinner","{width:1.1em;height:1.1em;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:spin .7s linear infinite;flex-shrink:0}",[1],[34,".7s","linear","infinite"]],[258,"@keyframes spin{to{transform:rotate(360deg)}}",34],[5,35,"{display:inline-block;margin-bottom:var(--space-3);padding:.25rem .75rem;border-radius:var(--radius-pill);background:var(--color-primary-soft);color:var(--color-primary);font-size:var(--font-size-xs);font-weight:700;letter-spacing:.2em;text-transform:uppercase}",[1]],[5,37,"{display:inline-flex;align-items:center;padding:.15rem .6rem;border-radius:var(--radius-pill);background:var(--color-surface-alt);border:1px solid var(--color-border);color:var(--color-text-muted);font-size:var(--font-size-xs);font-weight:600}",[1]],[5,".price","{font-weight:700;color:var(--color-text);font-variant-numeric:tabular-nums}",[1]],[5,".check-list","{list-style:none;padding:0;display:grid;gap:var(--space-3);--tick:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E\")}",[1]],[5,".check-list li","{position:relative;padding-left:2rem}",[[" ",[39,[25,0,0,0]]]]],[5,".check-list li:before","{content:\"\";position:absolute;left:0;top:.2em;width:1.3rem;height:1.3rem;border-radius:50%;background:var(--color-primary-soft)}",[[" ",[39,[25,0,0,0]]]]],[5,".check-list li:after","{content:\"\";position:absolute;left:0;top:.2em;width:1.3rem;height:1.3rem;background:var(--color-primary);-webkit-mask:var(--tick) center/.8rem no-repeat;mask:var(--tick) center/.8rem no-repeat}",[[" ",[39,[25,0,0,0]]]]],[21,".check-list--2",21,[1],2],[5,".chips","{display:flex;flex-wrap:wrap;gap:var(--space-2);list-style:none;padding:0;margin:0}",[1]],[5,41,"{position:relative;display:flex;flex-direction:column;height:100%;padding:var(--space-5);background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);transition:box-shadow var(--transition),border-color var(--transition),transform var(--transition)}",[1]],[5,[43,44],"{box-shadow:var(--shadow-md);border-color:color-mix(in srgb,var(--color-primary) 35%,var(--color-border))}",[[[45],0,0,0],[[45],0,0,0]]],[5,".card--flush","{padding:0;overflow:hidden}",[1]],[5,".card__body","{padding:var(--space-5);display:flex;flex-direction:column;gap:var(--space-2);flex:1}",[1]],[5,".card__title","{font-size:var(--font-size-lg);margin:0}",[1]],[5,".card__text","{color:var(--color-text-muted);margin:0;font-size:var(--font-size-sm)}",[1]],[5,".card__footer","{margin-top:auto;padding-top:var(--space-3);display:flex;align-items:center;justify-content:space-between;gap:var(--space-3)}",[1]],[5,".card .stretched-link:after","{content:\"\";position:absolute;inset:0;border-radius:inherit}",[[" ",[42,"stretched-link"]]]],[5,46,"{display:grid;place-items:center;width:3rem;height:3rem;margin-bottom:var(--space-3);border-radius:var(--radius-md);background:var(--color-primary-soft);color:var(--color-primary);flex-shrink:0}",[1]],[5,".steps","{list-style:none;padding:0;margin:0;display:grid;gap:var(--space-5);counter-reset:step;grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))}",[1]],[5,49,"{counter-increment:step;position:relative;padding:var(--space-5);padding-top:calc(var(--space-5) + 2.75rem);background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg)}",[[">",[48,[25,0,0,0]]]]],[37,50,"{font-family:var(--font-display);content:counter(step,decimal-leading-zero);position:absolute;top:var(--space-5);left:var(--space-5);font-size:var(--font-size-xl);font-weight:800;color:var(--color-primary)}",[[">",[48,[25,0,0,0]]]],[8]],[5,".steps>li h3",9,[["> ",[48,[25,0,0,0],[6,0,0,0]]]]],[5,".steps>li p","{margin:0;color:var(--color-text-muted);font-size:var(--font-size-sm)}",[["> ",[48,[25,0,0,0],[10,0,0,0]]]]],[5,51,"{overflow-x:auto;border:1px solid var(--color-border);border-radius:var(--radius-md);background:var(--color-surface)}",[1]],[5,".table","{width:100%;border-collapse:collapse;font-size:var(--font-size-sm)}",[1]],[5,".table caption","{text-align:left;padding:var(--space-4);font-weight:600}",[[" ",[53,["caption",0,0,0]]]]],[5,[".table th",".table td"],"{padding:var(--space-3) var(--space-4);text-align:left;border-top:1px solid var(--color-border);white-space:nowrap}",[[" ",[53,[54,0,0,0]]],[" ",[53,[55,0,0,0]]]]],[5,".table thead th","{background:var(--color-surface-alt);font-weight:600;color:var(--color-text-muted);font-size:var(--font-size-xs);text-transform:uppercase;letter-spacing:.04em}",[["  ",[53,["thead",0,0,0],[54,0,0,0]]]]],[5,[".table td.num",".table th.num"],"{text-align:right;font-variant-numeric:tabular-nums}",[[" ",[53,[55,[56],0,0]]],[" ",[53,[54,[56],0,0]]]]],[5,".accordion","{display:grid;gap:var(--space-3)}",[1]],[5,58,"{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md)}",[[" ",[57,[59,0,0,0]]]]],[5,60,"{box-shadow:var(--shadow-sm)}",[[" ",[57,[59,0,0,[[61,0,62,0]]]]]]],[5,".accordion summary","{display:flex;justify-content:space-between;align-items:center;gap:var(--space-4);padding:var(--space-4) var(--space-5);font-weight:600;cursor:pointer;list-style:none}",[[" ",[57,[63,0,0,0]]]]],[5,".accordion summary::-webkit-details-marker","{display:none}",[[" ",[57,[63,0,0,0]]]]],[5,64,"{content:\"+\";flex-shrink:0;display:grid;place-items:center;width:1.75rem;height:1.75rem;border-radius:50%;background:var(--color-primary-soft);color:var(--color-primary);font-size:1.25rem;line-height:1}",[[" ",[57,[63,0,0,0]]]]],[5,65,"{content:\"\\2013\"}",[["  ",[57,[59,0,0,[[61,0,62,0]]],[63,0,0,0]]]]],[5,".accordion .accordion__body","{padding:0 var(--space-5) var(--space-4);color:var(--color-text-muted)}",[[" ",[57,66]]]],[5,".accordion .accordion__body p:last-child",67,[["  ",[57,66,[10,0,0,0]]]]],[5,68,"{display:grid;gap:var(--space-5);align-items:center;padding:clamp(1.75rem,1rem + 3vw,3rem);border-radius:var(--radius-lg);background:var(--color-primary);color:var(--color-on-primary)}",[1]],[5,".cta-band h2","{color:inherit;font-size:var(--font-size-2xl);margin:0 0 var(--space-2)}",[[" ",[69,[5,0,0,0]]]]],[5,".cta-band p","{margin:0;opacity:.92}",[[" ",[69,[10,0,0,0]]]]],[21,68,"{grid-template-columns:1fr auto}",[1],3],[5,".alert","{display:flex;gap:var(--space-3);align-items:flex-start;padding:var(--space-4);border-radius:var(--radius-md);border:1px solid;font-size:var(--font-size-sm)}",[1]],[5,".alert p",67,[[" ",[70,[10,0,0,0]]]]],[5,".alert--success","{border-color:var(--color-success);background:color-mix(in srgb,var(--color-success) 8%,var(--color-surface))}",[1]],[5,".alert--error","{border-color:var(--color-danger);background:color-mix(in srgb,var(--color-danger) 8%,var(--color-surface))}",[1]],[5,".alert--info","{border-color:var(--color-border);background:var(--color-surface-alt)}",[1]],[5,".pagination","{display:flex;flex-wrap:wrap;gap:var(--space-2);justify-content:center;list-style:none;padding:0;margin:var(--space-7) 0 0}",[1]],[5,[".pagination a",".pagination span"],"{display:inline-grid;place-items:center;min-width:2.75rem;height:2.75rem;padding:0 var(--space-3);border-radius:var(--radius-sm);border:1px solid var(--color-border);background:var(--color-surface);text-decoration:none;font-weight:600}",[[" ",[71,[13,0,0,0]]],[" ",[71,["span",0,0,0]]]]],[5,".pagination [aria-current=page]","{background:var(--color-primary);border-color:var(--color-primary);color:var(--color-on-primary)}",[[" ",[71,[0,0,0,[["aria-current",1,"page",0]]]]]]],[5,[".form",72],"{display:grid;gap:var(--space-4)}",[1,1]],[21,72,21,[1],2],[5,".field","{display:grid;gap:var(--space-2)}",[1]],[5,".field label","{font-weight:600;font-size:var(--font-size-sm)}",[[" ",[74,["label",0,0,0]]]]],[5,".field .req",75,[[" ",[74,76]]]],[5,".field .hint","{font-size:var(--font-size-xs);color:var(--color-text-muted)}",[[" ",[74,77]]]],[5,[78,79,80],"{width:100%;min-height:2.875rem;padding:.625rem .875rem;font:inherit;font-size:1rem;color:var(--color-text);background:var(--color-surface);border:1.5px solid var(--color-border);border-radius:var(--radius-sm);transition:border-color var(--transition),box-shadow var(--transition)}",[[" ",[74,[81,0,0,0]]],[" ",[74,[82,0,0,0]]],[" ",[74,[83,0,0,0]]]]],[5,[".field input:hover",".field select:hover",".field textarea:hover"],"{border-color:color-mix(in srgb,var(--color-primary) 40%,var(--color-border))}",[[" ",[74,[81,0,0,0]]],[" ",[74,[82,0,0,0]]],[" ",[74,[83,0,0,0]]]]],[5,[84,85,86],"{outline:none;border-color:var(--color-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--color-primary) 25%,transparent)}",[[" ",[74,[81,0,0,0]]],[" ",[74,[82,0,0,0]]],[" ",[74,[83,0,0,0]]]]],[5,[".field input[aria-invalid=true]",".field select[aria-invalid=true]",".field textarea[aria-invalid=true]"],"{border-color:var(--color-danger)}",[[" ",[74,[81,0,0,[[87,1,29,0]]]]],[" ",[74,[82,0,0,[[87,1,29,0]]]]],[" ",[74,[83,0,0,[[87,1,29,0]]]]]]],[5,80,"{min-height:8rem;resize:vertical}",[[" ",[74,[83,0,0,0]]]]],[5,".field .error","{display:flex;gap:var(--space-1);align-items:center;margin:0;color:var(--color-danger);font-size:var(--font-size-xs);font-weight:600}",[[" ",[74,"error"]]]],[5,".hp","{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}",[1]],[5,".hint","{margin:0;font-size:var(--font-size-xs);color:var(--color-text-muted)}",[1]],[5,".req",75,[1]],[5,".link-btn","{padding:0;border:0;background:none;font:inherit;font-weight:600;color:var(--color-primary);text-decoration:underline;cursor:pointer}",[1]],[5,88,"{--pg-hue:#000;--pg-mix:0%;--page-accent:color-mix(in srgb, var(--pg-hue) var(--pg-mix), var(--color-accent, var(--color-primary)));--page-soft:color-mix(in srgb, var(--page-accent) 16%, var(--color-primary-soft));--page-alt:color-mix(in srgb, var(--page-accent) 9%, var(--color-surface-alt));--page-glow:color-mix(in srgb, var(--page-accent) 55%, transparent);accent-color:var(--color-primary)}",[3]],[5,"app-root[data-page=about]","{--pg-hue:#6366f1;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"about",0]]]]]]],[5,"app-root[data-page=services]","{--pg-hue:#0ea5e9;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"services",0]]]]]]],[5,"app-root[data-page=how-it-works]","{--pg-hue:#8b5cf6;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"how-it-works",0]]]]]]],[5,"app-root[data-page=products]","{--pg-hue:#10b981;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"products",0]]]]]]],[5,"app-root[data-page=calculator]","{--pg-hue:#f59e0b;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"calculator",0]]]]]]],[5,"app-root[data-page=testimonials]","{--pg-hue:#f43f5e;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"testimonials",0]]]]]]],[5,"app-root[data-page=faq]","{--pg-hue:#06b6d4;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"faq",0]]]]]]],[5,"app-root[data-page=careers]","{--pg-hue:#d946ef;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"careers",0]]]]]]],[5,"app-root[data-page=gallery]","{--pg-hue:#f97316;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"gallery",0]]]]]]],[5,"app-root[data-page=blog]","{--pg-hue:#ec4899;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"blog",0]]]]]]],[5,"app-root[data-page=contact]","{--pg-hue:#22c55e;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"contact",0]]]]]]],[5,"app-root[data-page=notfound]","{--pg-hue:#64748b;--pg-mix:82%}",[["",[[88,0,0,[[89,1,"notfound",0]]]]]]],[5,[90,91],"{--color-accent:var(--page-accent)}",[3,3]],[5,91,"{--color-surface-alt:var(--page-alt)}",[3]],[69,92,"{animation:page-fade .45s ease both}",[[">",[[91,0,0,0],[0,0,0,0]]]],[93,".45s","ease","both"]],[258,"@keyframes page-fade{0%{opacity:0}}",93],[5,".btn:not(.btn--outline):not(.btn--ghost):not(.btn--light):not(.btn--solid)","{background:linear-gradient(135deg,var(--btn-bg),color-mix(in srgb,var(--btn-bg) 76%,var(--color-accent)));box-shadow:0 10px 22px -12px color-mix(in srgb,var(--color-primary) 85%,transparent),inset 0 1px #ffffff38}",[[[28],0,0,0]]],[5,".btn:not(.btn--outline):not(.btn--ghost):not(.btn--light):not(.btn--solid):hover","{transform:translateY(-1px);box-shadow:0 14px 26px -12px color-mix(in srgb,var(--color-primary) 90%,transparent),inset 0 1px #ffffff40}",[[[28],0,0,0]]],[5,27,"{transition:background-color var(--transition),border-color var(--transition),color var(--transition),box-shadow var(--transition),transform var(--transition)}",[1]],[5,".btn:active","{transform:translateY(0)}",[[[28],0,0,0]]],[5,31,"{box-shadow:0 10px 22px -14px var(--page-glow)}",[[[30],0,0,0]]],[5,35,"{display:inline-flex;align-items:center;gap:.5rem;background:color-mix(in srgb,var(--color-accent) 12%,var(--color-surface));border:1px solid color-mix(in srgb,var(--color-accent) 28%,transparent)}",[1]],[5,".eyebrow:before","{content:\"\";width:.4rem;height:.4rem;border-radius:50%;background:var(--color-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--color-accent) 25%,transparent)}",[[[36],0,0,0]]],[5,41,"{border-color:color-mix(in srgb,var(--color-border) 80%,var(--color-accent));box-shadow:0 1px 2px #0f172a0a,0 8px 24px -14px #0f172a1f}",[1]],[5,".card--interactive:before","{content:\"\";position:absolute;inset:0 0 auto;height:3px;z-index:2;border-radius:var(--radius-lg) var(--radius-lg) 0 0;background:linear-gradient(90deg,var(--color-accent),var(--color-primary));opacity:0;transition:opacity .3s ease}",[[[45],0,0,0]]],[5,[43,44],"{transform:translateY(-3px);box-shadow:0 22px 44px -22px var(--page-glow),0 4px 10px #0f172a0d}",[[[45],0,0,0],[[45],0,0,0]]],[5,[".card--interactive:hover:before",".card--interactive:focus-within:before"],"{opacity:1}",[[[45],0,0,0],[[45],0,0,0]]],[5,46,"{background:linear-gradient(145deg,color-mix(in srgb,var(--color-accent) 18%,var(--color-surface)),var(--color-primary-soft));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--color-accent) 22%,transparent)}",[1]],[5,49,"{transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;box-shadow:0 8px 24px -16px #0f172a26}",[[">",[48,[25,0,0,0]]]]],[5,".steps>li:hover","{transform:translateY(-3px);border-color:color-mix(in srgb,var(--color-accent) 40%,var(--color-border));box-shadow:0 20px 40px -22px var(--page-glow)}",[[">",[48,[25,0,0,0]]]]],[5,50,"{background:linear-gradient(135deg,var(--color-primary),var(--color-accent));-webkit-background-clip:text;background-clip:text;color:transparent}",[[">",[48,[25,0,0,0]]]]],[5,51,"{box-shadow:0 8px 24px -16px #0f172a26}",[1]],[5,".table tbody tr","{transition:background-color .2s ease}",[["  ",[53,[94,0,0,0],[95,0,0,0]]]]],[5,".table tbody tr:hover","{background:color-mix(in srgb,var(--color-accent) 7%,transparent)}",[["  ",[53,[94,0,0,0],[95,0,0,0]]]]],[5,58,"{transition:box-shadow .25s ease,border-color .25s ease}",[[" ",[57,[59,0,0,0]]]]],[5,".accordion details:hover","{border-color:color-mix(in srgb,var(--color-accent) 35%,var(--color-border))}",[[" ",[57,[59,0,0,0]]]]],[5,60,"{border-color:color-mix(in srgb,var(--color-accent) 45%,var(--color-border));box-shadow:0 14px 30px -20px var(--page-glow)}",[[" ",[57,[59,0,0,[[61,0,62,0]]]]]]],[5,64,"{background:color-mix(in srgb,var(--color-accent) 16%,var(--color-surface));transition:transform .25s ease,background .25s ease}",[[" ",[57,[63,0,0,0]]]]],[5,65,"{transform:rotate(180deg)}",[["  ",[57,[59,0,0,[[61,0,62,0]]],[63,0,0,0]]]]],[5,[78,79,80],"{background:color-mix(in srgb,var(--color-surface) 92%,var(--color-accent))}",[[" ",[74,[81,0,0,0]]],[" ",[74,[82,0,0,0]]],[" ",[74,[83,0,0,0]]]]],[5,[84,85,86],"{box-shadow:0 0 0 4px color-mix(in srgb,var(--color-accent) 24%,transparent)}",[[" ",[74,[81,0,0,0]]],[" ",[74,[82,0,0,0]]],[" ",[74,[83,0,0,0]]]]],[5,68,"{position:relative;overflow:hidden;box-shadow:0 24px 50px -28px var(--page-glow)}",[1]],[5,".cta-band:after","{content:\"\";position:absolute;width:18rem;height:18rem;right:-5rem;top:-7rem;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.2),transparent 70%);pointer-events:none}",[[[69],0,0,0]]],[5,[37,".chips li"],"{transition:border-color .2s ease,background .2s ease}",[1,[" ",[40,[25,0,0,0]]]]],[5,".pagination a:hover","{border-color:var(--color-accent);color:var(--color-primary)}",[[" ",[71,[13,0,0,0]]]]],[85,92,"{animation:none}",[[">",[[91,0,0,0],[0,0,0,0]]]],0,["none"]],[5,["main h1","main h2"],"{font-weight:800;letter-spacing:-.03em}",[[" ",[[91,0,0,0],[4,0,0,0]]],[" ",[[91,0,0,0],[5,0,0,0]]]]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CggR0x36.js",
      "chunk-D91KL6Ju.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAvi01JR.js",
      "chunk-D91KL6Ju.js"
    ],
    "route": "/services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5dSojL_.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js"
    ],
    "route": "/how-it-works"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBTzJs5i.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-CQcZKdtG.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpmSwKgq.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js"
    ],
    "route": "/products/ro-water-purifiers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxK89GL2.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products/water-softeners"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxK89GL2.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products/purolite-softener-resin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxK89GL2.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products/sand-filters"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxK89GL2.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products/iron-filters"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxK89GL2.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products/carbon-filters"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BxK89GL2.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-Bhl_F31m.js"
    ],
    "route": "/products/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CG62BHE8.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-D3nM601u.js"
    ],
    "route": "/calculator"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYarwpSG.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-CQcZKdtG.js",
      "chunk-Cy9sRGXK.js"
    ],
    "route": "/testimonials"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZBsFDkaN.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-D3nM601u.js",
      "chunk-hVO3BXDh.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ci8Z_Xef.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js",
      "chunk-CQcZKdtG.js",
      "chunk-D3nM601u.js",
      "chunk-hVO3BXDh.js"
    ],
    "route": "/careers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bi3kN8E5.js",
      "chunk-D91KL6Ju.js",
      "chunk-CHGOnJML.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-rAJAyXt6.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js",
      "chunk-CQcZKdtG.js"
    ],
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKtMjtnf.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js"
    ],
    "route": "/blog/signs-of-hard-water"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKtMjtnf.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js"
    ],
    "route": "/blog/water-softener-maintenance-tips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKtMjtnf.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js"
    ],
    "route": "/blog/choosing-the-right-water-softener"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKtMjtnf.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js"
    ],
    "route": "/blog/iron-in-borewell-water"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKtMjtnf.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js"
    ],
    "route": "/blog/sand-filter-vs-carbon-filter"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DKtMjtnf.js",
      "chunk-D91KL6Ju.js",
      "chunk-PoarNDa6.js"
    ],
    "route": "/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeJAcGn-.js",
      "chunk-D91KL6Ju.js",
      "chunk-D3nM601u.js",
      "chunk-hVO3BXDh.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 0,
    "status": 404,
    "headers": {
      "Cache-Control": "no-store"
    },
    "preload": [
      "chunk-b2P_8yix.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    "index.csr.html": {size: 16835, hash: "6f31c6e9dbd7c6ea", text: () => import("./assets-chunks/index_csr_html.mjs").then(m => m.default)},
    "index.server.html": {size: 15015, hash: "a03b179500a8aaaf", text: () => import("./assets-chunks/index_server_html.mjs").then(m => m.default)},
    "products/index.html": {size: 110363, hash: "c5c82c426fffd839", text: () => import("./assets-chunks/products_index_html.mjs").then(m => m.default)},
    "products/ro-water-purifiers/index.html": {size: 106502, hash: "f1475de81dacd0f8", text: () => import("./assets-chunks/products_ro-water-purifiers_index_html.mjs").then(m => m.default)},
    "services/index.html": {size: 119832, hash: "9ce86596f6535a3c", text: () => import("./assets-chunks/services_index_html.mjs").then(m => m.default)},
    "how-it-works/index.html": {size: 109572, hash: "a022dbc073fccef4", text: () => import("./assets-chunks/how-it-works_index_html.mjs").then(m => m.default)},
    "testimonials/index.html": {size: 110412, hash: "1604dabecbbd8b1b", text: () => import("./assets-chunks/testimonials_index_html.mjs").then(m => m.default)},
    "faq/index.html": {size: 103033, hash: "16609f5dc6d93526", text: () => import("./assets-chunks/faq_index_html.mjs").then(m => m.default)},
    "index.html": {size: 261160, hash: "b9ba3dd7943e4e24", text: () => import("./assets-chunks/index_html.mjs").then(m => m.default)},
    "about/index.html": {size: 113937, hash: "a95b8b9ee022e1ff", text: () => import("./assets-chunks/about_index_html.mjs").then(m => m.default)},
    "blog/index.html": {size: 112584, hash: "b37dbd8b3878b766", text: () => import("./assets-chunks/blog_index_html.mjs").then(m => m.default)},
    "blog/signs-of-hard-water/index.html": {size: 125454, hash: "38a9c634ae0865ca", text: () => import("./assets-chunks/blog_signs-of-hard-water_index_html.mjs").then(m => m.default)},
    "blog/iron-in-borewell-water/index.html": {size: 125156, hash: "1602cc9bbb4056c0", text: () => import("./assets-chunks/blog_iron-in-borewell-water_index_html.mjs").then(m => m.default)},
    "blog/sand-filter-vs-carbon-filter/index.html": {size: 124715, hash: "523d05f013d1c44a", text: () => import("./assets-chunks/blog_sand-filter-vs-carbon-filter_index_html.mjs").then(m => m.default)},
    "products/water-softeners/index.html": {size: 115341, hash: "f8be40832fcc76af", text: () => import("./assets-chunks/products_water-softeners_index_html.mjs").then(m => m.default)},
    "products/purolite-softener-resin/index.html": {size: 107186, hash: "6169c69c0d79dc22", text: () => import("./assets-chunks/products_purolite-softener-resin_index_html.mjs").then(m => m.default)},
    "products/carbon-filters/index.html": {size: 109259, hash: "e282207574fe6041", text: () => import("./assets-chunks/products_carbon-filters_index_html.mjs").then(m => m.default)},
    "calculator/index.html": {size: 102963, hash: "51c32946950d992e", text: () => import("./assets-chunks/calculator_index_html.mjs").then(m => m.default)},
    "blog/water-softener-maintenance-tips/index.html": {size: 124923, hash: "1ec50ef7aa59656f", text: () => import("./assets-chunks/blog_water-softener-maintenance-tips_index_html.mjs").then(m => m.default)},
    "blog/choosing-the-right-water-softener/index.html": {size: 125867, hash: "8196a5433ed45357", text: () => import("./assets-chunks/blog_choosing-the-right-water-softener_index_html.mjs").then(m => m.default)},
    "products/sand-filters/index.html": {size: 112708, hash: "1d6f6ca5e9c534de", text: () => import("./assets-chunks/products_sand-filters_index_html.mjs").then(m => m.default)},
    "products/iron-filters/index.html": {size: 109173, hash: "7b32eef27dc205da", text: () => import("./assets-chunks/products_iron-filters_index_html.mjs").then(m => m.default)},
    "contact/index.html": {size: 116655, hash: "6fcb263791284a4f", text: () => import("./assets-chunks/contact_index_html.mjs").then(m => m.default)},
    "careers/index.html": {size: 102604, hash: "10642b0977f797c4", text: () => import("./assets-chunks/careers_index_html.mjs").then(m => m.default)},
    "gallery/index.html": {size: 124399, hash: "9bfd7adee5642741", text: () => import("./assets-chunks/gallery_index_html.mjs").then(m => m.default)}
  },
};
