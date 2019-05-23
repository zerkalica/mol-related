declare namespace $ { }
export = $;
declare namespace $ {
    function $mol_offline(uri?: string): void;
}
declare namespace $ {
}
declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    type $mol_ambient_context = Window & {
        Promise: PromiseConstructor;
        Math: Math;
        XMLHttpRequest: typeof XMLHttpRequest;
    } & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}
declare namespace $ {
    namespace $$ { }
    class $mol_object {
        static $: $mol_ambient_context;
        readonly $: $mol_ambient_context;
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
        static toString(): string;
        'object_owner()': any;
        object_owner(next?: any): any;
        'object_host()': any;
        object_host(next?: any): any;
        'object_field()': string;
        object_field(next?: string): string;
        object_id(next?: string): any;
        toString(): any;
        toJSON(): any;
        destructor(): void;
    }
}
declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }): {
            width: number;
            height: number;
        };
    }
}
declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}
declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
}
declare namespace $ {
    function $mol_fail_hidden(error: any): never;
    function $mol_fail(error: any): never;
}
declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}
declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}
declare namespace $ {
    function $mol_log_debug(next?: () => void): () => void;
}
declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}
declare namespace $ {
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
}
declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}
declare namespace $ {
    var $mol_state_stack: Map<string, any>;
}
declare namespace $ {
    enum $mol_atom_status {
        obsolete = "obsolete",
        checking = "checking",
        pulling = "pulling",
        actual = "actual"
    }
    class $mol_atom<Value = any> extends $mol_object {
        masters: Set<$mol_atom<any>> | null;
        slaves: Set<$mol_atom<any>> | null;
        status: $mol_atom_status;
        readonly handler: (next?: Value, force?: $mol_atom_force) => Value | void;
        'value()': Value | Error | undefined;
        constructor(id: string, handler?: (next?: Value, force?: $mol_atom_force) => Value | void);
        destructor(): void;
        unlink(): void;
        get(force?: $mol_atom_force): Value;
        actualize(force?: $mol_atom_force): void;
        pull(force?: $mol_atom_force): any;
        _next: Value | undefined;
        _ignore: Value | undefined;
        set(next: Value): Value;
        push(next_raw?: Value | Error): Value;
        obsolete_slaves(): void;
        check_slaves(): void;
        check(): void;
        obsolete(): void;
        lead(slave: $mol_atom<any>): void;
        dislead(slave: $mol_atom<any>): void;
        obey(master: $mol_atom<any>): void;
        disobey(master: $mol_atom<any>): void;
        disobey_all(): void;
        cache(next?: Value | Error): Error | Value;
        value(next?: Value, force?: $mol_atom_force): Value;
        static stack: $mol_atom<any>[];
        static updating: $mol_atom<any>[];
        static reaping: Set<$mol_atom<any>>;
        static scheduled: boolean;
        static actualize(atom: $mol_atom<any>): void;
        static reap(atom: $mol_atom<any>): void;
        static unreap(atom: $mol_atom<any>): void;
        static schedule(): void;
        static sync(): void;
        then<Next>(done: (prev?: Value) => Next, fail?: (error: Error) => Next): $mol_atom<any>;
        catch(fail: (error: Error) => Value): $mol_atom<any>;
    }
    function $mol_atom_current<Value = any>(): $mol_atom<Value>;
    class $mol_atom_wait extends Error {
        name: string;
    }
    class $mol_atom_force extends Object {
        $mol_atom_force: boolean;
        static $mol_atom_force: boolean;
        static toString(): string;
    }
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    class $mol_atom_force_update extends $mol_atom_force {
    }
}
declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value]>;
        };
    }
}
declare namespace $ {
    function $mol_mem<Host, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(next?: Value, force?: $mol_atom_force) => Value>): void;
    function $mol_mem_key<Host, Key, Value>(obj: Host, name: string, descr: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_atom_force) => Value>): void;
}
declare var $node: any;
declare namespace $ {
}
declare namespace $ {
    var $mol_dom_context: Window & {
        Node: typeof Node;
        Element: typeof Element;
        HTMLElement: typeof HTMLElement;
        XMLHttpRequest: typeof XMLHttpRequest;
    };
}
declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], force?: $mol_atom_force): Element[];
        static position(next?: {
            start: number;
            end: number;
            id: string;
        }, force?: $mol_atom_force): {
            start: number;
            end: number;
            id: string;
        };
        static onFocus(event: FocusEvent): void;
        static onBlur(event: FocusEvent): void;
    }
}
declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | number | boolean | {
        dom_tree: () => Node;
    }>): void;
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean;
    }): void;
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}
declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}
declare namespace $ {
    namespace $$ { }
    namespace $mol { }
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root(id: number): $mol_view;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        context(next?: $mol_ambient_context): $mol_ambient_context;
        $: $mol_ambient_context;
        context_sub(): $mol_ambient_context;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): (string | number | boolean | Node | $mol_view)[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        content_height(): number;
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        attr(): {
            [key: string]: string | number | boolean;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): $mol_view[];
    }
}
declare namespace $ {
    const enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        bracketClose = 221,
        quoteSingle = 222
    }
}
declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        click(event?: any, force?: $mol_atom_force): any;
        event_click(event?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_activate(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        sub(): any[];
    }
}
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
    }
}
declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        attr(): {
            "mol_theme": string;
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
    }
}
declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}
declare namespace $ {
    class $mol_scroll extends $mol_view {
        minimal_height(): number;
        moving_hor(val?: any, force?: $mol_atom_force): any;
        moving_vert(val?: any, force?: $mol_atom_force): any;
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        scroll_top(val?: any, force?: $mol_atom_force): any;
        scroll_left(val?: any, force?: $mol_atom_force): any;
        scroll_bottom(val?: any, force?: $mol_atom_force): any;
        scroll_right(val?: any, force?: $mol_atom_force): any;
        event_async(): {
            "scroll": (event?: any) => any;
        };
        event_scroll(event?: any, force?: $mol_atom_force): any;
        Strut(): $mol_view;
        strut_transform(): string;
    }
}
declare namespace $.$$ {
    function $mol_scroll_top(): number;
    function $mol_scroll_left(): number;
    function $mol_scroll_moving(): boolean;
    function $mol_scroll_moving_vert(): boolean;
    function $mol_scroll_moving_hor(): boolean;
    class $mol_scroll extends $.$mol_scroll {
        scroll_bottom(next?: number): number;
        scroll_right(next?: number): number;
        event_scroll(next?: Event): void;
        event_repos(next?: Event): void;
        _moving_task_timer: any;
        moving_task_stop(): void;
        moving(): any;
        context_sub(): $mol_ambient_context;
        strut_transform(): string;
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
    }
}
declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}
declare namespace $ {
    class $mol_page extends $mol_view {
        sub(): any[];
        Head(): $mol_view;
        head(): any[];
        Title(): $mol_button;
        event_top(val?: any, force?: $mol_atom_force): any;
        Tools(): $mol_view;
        tools(): any[];
        Body(): $mol_scroll;
        body_scroll_top(val?: any, force?: $mol_atom_force): any;
        body(): any[];
        Foot(): $mol_view;
        foot(): any[];
    }
}
declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}
declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_atom_force): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}
declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}
declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        watcher(): any;
        stat(next?: any, force?: $mol_atom_force): any;
        version(): any;
        exists(next?: boolean): boolean;
        parent(): $mol_file;
        type(): "dir" | "link" | "file" | "blocks" | "chars" | "fifo" | "socket";
        name(): any;
        ext(): string;
        content(next?: string, force?: $mol_atom_force): any;
        reader(): any;
        writer(): any;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): any;
        append(next: string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
    }
}
declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}
declare namespace $ {
    class $mol_plugin extends $mol_object {
        dom_node(): any;
        attr_static(): {};
        event(): {};
        event_async(): {};
    }
}
declare namespace $.$$ {
    class $mol_plugin extends $.$mol_plugin {
        dom_node(): any;
        render(): any;
    }
}
declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number, force?: $mol_atom_force): number;
    }
}
declare namespace $ {
    class $mol_meter extends $mol_plugin {
        zoom(): number;
        width(val?: any, force?: $mol_atom_force): any;
        height(val?: any, force?: $mol_atom_force): any;
        left(val?: any, force?: $mol_atom_force): any;
        right(val?: any, force?: $mol_atom_force): any;
        bottom(val?: any, force?: $mol_atom_force): any;
        top(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: any;
            top: any;
            right: any;
            bottom: any;
            width: any;
            height: any;
            zoom: number;
        };
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        width(): any;
        height(): any;
        zoom(): number;
    }
}
declare namespace $ {
    class $mol_touch extends $mol_plugin {
        start_zoom(val?: any, force?: $mol_atom_force): any;
        start_distance(val?: any, force?: $mol_atom_force): any;
        zoom(val?: any, force?: $mol_atom_force): any;
        start_pan(val?: any, force?: $mol_atom_force): any;
        pan(val?: any, force?: $mol_atom_force): any;
        start_pos(val?: any, force?: $mol_atom_force): any;
        swipe_precision(): number;
        swipe_right(val?: any, force?: $mol_atom_force): any;
        swipe_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_left(val?: any, force?: $mol_atom_force): any;
        swipe_top(val?: any, force?: $mol_atom_force): any;
        swipe_from_right(val?: any, force?: $mol_atom_force): any;
        swipe_from_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_from_left(val?: any, force?: $mol_atom_force): any;
        swipe_from_top(val?: any, force?: $mol_atom_force): any;
        swipe_to_right(val?: any, force?: $mol_atom_force): any;
        swipe_to_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_to_left(val?: any, force?: $mol_atom_force): any;
        swipe_to_top(val?: any, force?: $mol_atom_force): any;
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
        };
        event_start(event?: any, force?: $mol_atom_force): any;
        event_move(event?: any, force?: $mol_atom_force): any;
        event_end(event?: any, force?: $mol_atom_force): any;
        event_async(): {
            "wheel": (event?: any) => any;
        };
        event_wheel(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        event_start(event?: TouchEvent | MouseEvent): void;
        event_move(event?: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent): void;
        event_wheel(event?: WheelEvent): void;
    }
}
declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_tree(): Element;
        title(): string;
    }
}
declare namespace $ {
    class $mol_book extends $mol_view {
        sub(): any[];
        pages_wrapped(): any[];
        pages(): any[];
        plugins(): any[];
        width(): any;
        Meter(): $mol_meter;
        Touch(): $mol_touch;
        event_front_up(val?: any, force?: $mol_atom_force): any;
        event_front_down(val?: any, force?: $mol_atom_force): any;
        Page(index: any): $mol_book_page;
        page(index: any): any;
        page_visible(index: any): boolean;
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        minimal_width(): number;
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        attr(): {
            "tabindex": number;
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
        visible(): boolean;
    }
}
declare namespace $.$$ {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
    }
}
declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string;
        }): {
            [key: string]: any;
        };
        static value(key: string, next?: string): any;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): any;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}
declare namespace $ {
    class $mol_link extends $mol_view {
        minimal_height(): number;
        dom_name(): string;
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        sub(): any[];
        arg(): {};
        event(): {
            "click": (event?: any) => any;
        };
        click(event?: any, force?: $mol_atom_force): any;
        event_click(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
    }
}
declare namespace $ {
    class $mol_filler extends $mol_view {
        minimal_height(): number;
        sub(): any[];
    }
}
declare namespace $ {
    class $mpk_tss_software extends $mol_page {
        title(): string;
        body(): any[];
        Content(): $mol_filler;
    }
}
declare namespace $ {
    class $mol_list extends $mol_view {
        sub(): any[];
        rows(): any[];
        Empty(): any;
    }
}
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): any[];
        row_offsets(): number[];
        row_context(index: number): $mol_ambient_context;
        sub_visible(): any[];
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
    }
}
declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        view_box(): string;
        aspect(): string;
    }
}
declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            "d": string;
        };
        geometry(): string;
    }
}
declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        sub(): any[];
        Path(): $mol_svg_path;
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_unknown extends $mol_view {
        sub(): any[];
        unknown_title(): string;
    }
}
declare namespace $ {
    class $mol_row extends $mol_view {
    }
}
declare namespace $ {
    class $mol_row_sub extends $mol_view {
    }
}
declare namespace $.$$ {
    class $mol_row extends $.$mol_row {
        item_offsets_top(): number[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_labeler extends $mol_view {
        sub(): any[];
        Title(): $mol_view;
        label(): any[];
        Content(): $mol_view;
        content(): any;
    }
}
declare namespace $ {
    class $mol_time_base {
        static patterns: any;
        static formatter(pattern: string): any;
        toString(pattern: string): string;
    }
}
declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            'mm': (duration: $mol_time_duration) => string;
        };
    }
}
declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        readonly offset: $mol_time_duration;
        readonly weekday: number;
        private _native;
        readonly native: Date;
        private _normal;
        readonly normal: $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            'YYYY': (moment: $mol_time_moment) => string;
            'AD': (moment: $mol_time_moment) => string;
            'YY': (moment: $mol_time_moment) => string;
            'Month': (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            'Mon': (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            'MM': (moment: $mol_time_moment) => string;
            'M': (moment: $mol_time_moment) => string;
            'WeekDay': (moment: $mol_time_moment) => string;
            'WD': (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            'DD': (moment: $mol_time_moment) => string;
            'D': (moment: $mol_time_moment) => string;
            'Thh': (moment: $mol_time_moment) => string;
            'hh': (moment: $mol_time_moment) => string;
            'h': (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            'mm': (moment: $mol_time_moment) => string;
            'm': (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            'ss': (moment: $mol_time_moment) => string;
            's': (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            'sss': (moment: $mol_time_moment) => string;
            'Z': (moment: $mol_time_moment) => string;
        };
    }
}
declare namespace $ {
    class $mpk_tss_todo extends Error {
        name: string;
    }
    class $mpk_tss_todo_unknown extends Error {
        name: string;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_date extends $mol_view {
        date(): any;
        sub(): any[];
        date_formatted(): any;
        Unknown(): $mpk_tss_parameter_unknown;
    }
}
declare namespace $.$$ {
    class $mpk_tss_parameter_date extends $.$mpk_tss_parameter_date {
        date(): $mol_time_moment;
        date_formatted(): string | $mpk_tss_parameter_unknown;
    }
}
declare namespace $ {
    class $mpk_tss_parameter extends $mol_row {
        sub(): any[];
        Name(): $mol_labeler;
        name_title(): string;
        name(): string;
        Value(): $mol_labeler;
        value_title(): string;
        value(): any;
        Updated(): $mol_labeler;
        updated_title(): string;
        Updated_value(): $mpk_tss_parameter_date;
        updated(): any;
    }
}
declare namespace $ {
    class $mpk_tss_parameter_list extends $mol_list {
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_status extends $mol_view {
        status(): any;
        colors(): boolean;
        statuses(): {
            "ready": string;
            "error": string;
            "not_responding": string;
            "inactive": string;
            "unknown": string;
        };
        ready(): string;
        error(): string;
        not_responding(): string;
        inactive(): string;
        unknown(): string;
        sub(): any[];
        status_text(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_status extends $.$mpk_tss_pereferial_status {
        status_text(): any;
        attr(): {
            [key: string]: string | number | boolean;
        } | {
            'mpk_tss_pereferial_status_type': any;
        };
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_domain extends $mol_object {
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        units(): $mpk_tss_pereferial_domain_unit[];
    }
    enum $mpk_tss_pereferial_domain_type {
        ups = "UPS"
    }
    enum $mpk_tss_pereferial_domain_status {
        ready = "ready",
        error = "error",
        not_responding = "not_responding",
        inactive = "inactive",
        unknown = "unknown"
    }
    class $mpk_tss_pereferial_domain_unit extends $mol_object {
        id(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        status(): $mpk_tss_pereferial_domain_status;
        updated(next?: $mol_time_moment): $mol_time_moment | null;
    }
    enum $mpk_tss_pereferial_domain_ups_power_source {
        line = "Line",
        internal = "Internal"
    }
    class $mpk_tss_pereferial_domain_ups extends $mpk_tss_pereferial_domain_unit {
        type(): $mpk_tss_pereferial_domain_type;
        power_source(): $mpk_tss_pereferial_domain_ups_power_source;
        voltage(): number;
        battery_level(): number;
        battery_time(): $mol_time_duration;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_details_ups extends $mpk_tss_parameter_list {
        unit(): any;
        Unknown(): $mpk_tss_parameter_unknown;
        rows(): any[];
        State(): $mpk_tss_parameter;
        name_title(): string;
        Status(): $mpk_tss_pereferial_status;
        status(): string;
        updated(): any;
        Power(): $mpk_tss_parameter;
        power_title(): string;
        power_source(): any;
        Voltage(): $mpk_tss_parameter;
        voltage_title(): string;
        voltage(): any;
        Bat_level(): $mpk_tss_parameter;
        bat_level_title(): string;
        battery_level(): any;
        Bat_time(): $mpk_tss_parameter;
        bat_time_title(): string;
        battery_time(): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_details_ups extends $.$mpk_tss_pereferial_details_ups {
        unit(): $mpk_tss_pereferial_domain_ups;
        status(): $mpk_tss_pereferial_domain_status;
        updated(): $mol_time_moment;
        power_source(): $mpk_tss_parameter_unknown | $mpk_tss_pereferial_domain_ups_power_source;
        voltage(): string | $mpk_tss_parameter_unknown;
        battery_level(): string | $mpk_tss_parameter_unknown;
        battery_time(): string | $mpk_tss_parameter_unknown;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_details extends $mol_page {
        unit(): any;
        minimal_width(): number;
        tools(): any[];
        Details_close(): $mol_link;
        Details_close_icon(): $mol_icon_cross;
        body(): any[];
        unit_details(): any;
        Ups(): $mpk_tss_pereferial_details_ups;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_details extends $.$mpk_tss_pereferial_details {
        unit(): $mpk_tss_pereferial_domain_unit;
        title(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        unit_details(): $.$mpk_tss_pereferial_details_ups;
    }
}
declare namespace $ {
    class $mol_card extends $mol_list {
        attr(): {
            "mol_card_status_type": string;
        };
        status(): string;
        rows(): any[];
        Content(): $mol_view;
        content(): any[];
        Status(): $mol_view;
        status_text(): string;
    }
}
declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}
declare namespace $ {
    class $mpk_tss_icon_download extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_card extends $mol_link {
        attr(): {
            "mpk_tss_card_shaded": boolean;
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        shaded(): boolean;
        minimal_height(): number;
        sub(): any[];
        Card(): $mol_card;
        status(): string;
        Footer(): $mol_view;
        Status_text(): any;
        Status_action(): $mol_button_minor;
        status_click(event?: any, force?: $mol_atom_force): any;
        Status_icon(): $mpk_tss_icon_download;
        Group(): $mol_row;
        items(): any[];
    }
}
declare namespace $.$$ {
    class $mpk_tss_card extends $.$mpk_tss_card {
    }
}
declare namespace $ {
    class $mpk_tss_icon_renew extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_card extends $mpk_tss_card {
        unit(): any;
        arg(): {
            "unit": string;
        };
        unit_id(): string;
        status(): string;
        unit_status(): string;
        Status_text(): $mpk_tss_pereferial_status;
        Status_icon(): $mpk_tss_icon_renew;
        status_click(event?: any, force?: $mol_atom_force): any;
        unit_status_click(event?: any, force?: $mol_atom_force): any;
        items(): any[];
        Type_item(): $mol_labeler;
        type_title(): string;
        type(): string;
        Name_item(): $mol_labeler;
        name_title(): string;
        name(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial_card extends $.$mpk_tss_pereferial_card {
        unit(): $mpk_tss_pereferial_domain_unit;
        unit_id(): string;
        type(): $mpk_tss_pereferial_domain_type;
        name(): string;
        unit_status(): $mpk_tss_pereferial_domain_status;
        unit_status_click(event?: Event): void;
    }
}
declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}
declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any, force?: $mol_atom_force): any;
        plugins(): any[];
        top(): any;
        bottom(): any;
        left(): any;
        right(): any;
        Meter(): $mol_meter;
        sub(): any[];
        Anchor(): any;
        Bubble(): $mol_pop_bubble;
        align(): string;
        bubble_content(): any[];
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        sub(): any[];
        content(): any[];
        style(): {
            "maxHeight": number;
        };
        height_max(): number;
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        align(): string;
    }
}
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
    }
}
declare namespace $ {
    class $mol_dimmer extends $mol_view {
        haystack(): string;
        needle(): string;
        sub(): any[];
        parts(): any[];
        Low(id: any): $mol_view;
        string(id: any): string;
    }
}
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}
declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any, force?: $mol_atom_force): any;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any, force?: $mol_atom_force): any;
        keys_y(val?: any, force?: $mol_atom_force): any;
        current_x(val?: any, force?: $mol_atom_force): any;
        current_y(val?: any, force?: $mol_atom_force): any;
        event_up(event?: any, force?: $mol_atom_force): any;
        event_down(event?: any, force?: $mol_atom_force): any;
        event_left(event?: any, force?: $mol_atom_force): any;
        event_right(event?: any, force?: $mol_atom_force): any;
        event(): {
            "keydown": (event?: any) => any;
        };
        event_key(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event?: KeyboardEvent): void;
        event_right(event?: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}
declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        debounce(): number;
        minimal_height(): number;
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
        };
        disabled(): boolean;
        value_changed(val?: any, force?: $mol_atom_force): any;
        value(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        type(val?: any, force?: $mol_atom_force): any;
        spellcheck(): boolean;
        attr(): {
            "maxlength": number;
        };
        length_max(): number;
        event(): {
            "input": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_change(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        _timer: any;
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
    }
}
declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}
declare namespace $ {
    class $mol_select extends $mol_pop {
        dictionary(): {};
        options(): any[];
        value(val?: any, force?: $mol_atom_force): any;
        minimal_height(): number;
        Option_row(id: any): $mol_button_minor;
        event_select(id: any, event?: any, force?: $mol_atom_force): any;
        option_content(id: any): any[];
        Option_label(id: any): $mol_dimmer;
        option_label(id: any): string;
        filter_pattern(val?: any, force?: $mol_atom_force): any;
        No_options(): $mol_view;
        no_options_message(): string;
        plugins(): any[];
        Nav(): $mol_nav;
        nav_components(): any[];
        option_focused(component?: any, force?: $mol_atom_force): any;
        nav_cycle(val?: any, force?: $mol_atom_force): any;
        showed(): boolean;
        options_showed(): boolean;
        Anchor(): $mol_button_minor;
        Trigger(): $mol_button_minor;
        trigger_content(): any[];
        option_content_current(): any[];
        Filter(): $mol_string;
        filter_hint(): string;
        hint(): string;
        debounce(): number;
        Trigger_icon(): $mol_icon_chevron;
        bubble_content(): any[];
        Menu(): $mol_list;
        menu_content(): any[];
        option_rows(): any[];
    }
}
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        options_showed(): boolean;
        options(): string[];
        options_filtered(): string[];
        option_label(id: string): any;
        option_rows(): $mol_view[] | $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_button_minor;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_view | $mol_button_minor)[];
        option_content_current(): any[];
        trigger_content(): any[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}
declare namespace $ {
    class $mol_search extends $mol_bar {
        query(val?: any, force?: $mol_atom_force): any;
        sub(): any[];
        Suggest(): $mol_select;
        suggest_selected(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        suggests_showed(): boolean;
        suggests(): any[];
        debounce(): number;
        Clear(): $mol_button_minor;
        Clear_icon(): $mol_icon_cross;
        event_clear(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_button_minor | $.$mol_select)[];
        event_clear(event?: Event): void;
    }
}
declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}
declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix(): string;
    }
}
declare namespace $ {
    function $mol_stub_select_random<Value>(list: Value[]): Value;
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
}
declare namespace $ {
    function $mpk_tss_stub_id(): string;
    function $mpk_tss_stub_ids(max?: number): string[];
    function $mpk_tss_stub_number(min?: number, max?: number): number;
}
declare namespace $ {
    class $mpk_tss_pereferial_domain_mock extends $mpk_tss_pereferial_domain {
        max_units(): number;
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        units(): $mpk_tss_pereferial_domain_unit[];
    }
}
declare namespace $ {
    class $mpk_tss_pereferial extends $mol_view {
        title(): string;
        pages(): any[];
        Main(): $mpk_tss_pereferial_page;
        event_top(e?: any, force?: $mol_atom_force): any;
        tools(): any[];
        filter_value(val?: any, force?: $mol_atom_force): any;
        clean_url(): any;
        List(): $mol_list;
        unit_links(): any[];
        Unit_current(): any;
        Unit_details(id: any): $mpk_tss_pereferial_details;
        details_event_top(e?: any, force?: $mol_atom_force): any;
        unit(id: any): any;
        Unit_link(id: any): $mpk_tss_pereferial_card;
    }
}
declare namespace $ {
    class $mpk_tss_pereferial_page extends $mol_page {
        sub(): any[];
        Filter_value(): $mol_search;
        filter_value(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_pereferial extends $.$mpk_tss_pereferial {
        domain(): $mpk_tss_pereferial_domain_mock;
        unit_links(): $.$mpk_tss_pereferial_card[];
        unit(id: string): $mpk_tss_pereferial_domain_unit;
        unit_current_id(next?: string): any;
        Unit_current(): $.$mpk_tss_pereferial_details;
        details_event_top(event?: Event): void;
        clean_url(): void;
        destructor(): void;
    }
}
declare namespace $ {
    class $mpk_tss_sensors extends $mol_page {
        title(): string;
        body(): any[];
        Content(): $mol_filler;
    }
}
declare namespace $ {
    class $mpk_tss_reports_status extends $mol_view {
        status(): any;
        colors(): boolean;
        statuses(): {
            "ready": string;
            "warning": string;
        };
        ready(): string;
        warning(): string;
        sub(): any[];
        status_text(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_status_card extends $mpk_tss_card {
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_status extends $.$mpk_tss_reports_status {
        status_text(): any;
        attr(): {
            [key: string]: string | number | boolean;
        } | {
            'mpk_tss_reports_status_type': any;
        };
    }
}
declare namespace $ {
    class $mpk_tss_reports_domain {
        report(id: string): $mpk_tss_reports_domain_report;
        reports(): $mpk_tss_reports_domain_report[];
    }
    enum $mpk_tss_reports_domain_violation_status {
        success = "success",
        warning = "warning"
    }
    enum $mpk_tss_reports_domain_load_type {
        free = "free",
        full = "full"
    }
    enum $mpk_tss_reports_domain_violation_type {
        slider = "slider"
    }
    class $mpk_tss_reports_domain_wheel extends $mol_object {
        id(): string;
        violation_status(): $mpk_tss_reports_domain_violation_status;
        force_vertical(): number;
        force_horizontal(): number;
    }
    type $mpk_tss_reports_domain_axle_chart = [number, number];
    class $mpk_tss_reports_domain_axle extends $mol_object {
        id(): string;
        axle_number(): number;
        wheel_left(): $mpk_tss_reports_domain_wheel;
        wheel_right(): $mpk_tss_reports_domain_wheel;
        chart_data(): $mpk_tss_reports_domain_axle_chart[];
    }
    class $mpk_tss_reports_domain_carriage extends $mol_object {
        id(): string;
        carriage_number(): string;
        place(): number;
        violation_status(): $mpk_tss_reports_domain_violation_status;
        violation_type(): $mpk_tss_reports_domain_violation_type | null;
        load_type(): $mpk_tss_reports_domain_load_type;
        measured_speed(): number;
        cargo_weight(): number;
        total_weight(): number;
        carriage_length(): number;
        axis(): $mpk_tss_reports_domain_axle[];
    }
    enum $mpk_tss_reports_domain_report_status {
        preparing = "preparing",
        sending = "sending",
        sent = "sent",
        error_try = "error_try",
        error_no_send = "error_no_send"
    }
    class $mpk_tss_reports_domain_report extends $mol_object {
        id(): string;
        train_number(): string;
        send_count(): number;
        report_status(): $mpk_tss_reports_domain_report_status;
        violation_status(): $mpk_tss_reports_domain_violation_status;
        measurement_start(): $mol_time_moment | null;
        carriages(): $mpk_tss_reports_domain_carriage[];
        carriage(id: string): $mpk_tss_reports_domain_carriage;
    }
}
declare namespace $ {
    class $mpk_tss_reports_card extends $mpk_tss_reports_status_card {
        report(): any;
        arg(): {
            "report": string;
        };
        report_id(): string;
        status(): string;
        Status_text(): $mpk_tss_reports_status;
        violation_status(): string;
        Status_icon(): $mpk_tss_icon_download;
        status_click(event?: any, force?: $mol_atom_force): any;
        report_status_click(event?: any, force?: $mol_atom_force): any;
        items(): any[];
        Id(): $mol_labeler;
        id_title(): string;
        Name(): $mol_labeler;
        name_title(): string;
        train_number(): string;
        Measurement_start(): $mol_labeler;
        measurement_start_title(): string;
        measurement_start(): string;
        Report_status(): $mol_labeler;
        report_status_title(): string;
        report_status(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_card extends $.$mpk_tss_reports_card {
        report(): $mpk_tss_reports_domain_report;
        report_id(): string;
        train_number(): string;
        violation_status(): $mpk_tss_reports_domain_violation_status;
        measurement_start(): string;
        report_status(): $mpk_tss_reports_domain_report_status;
        report_status_click(even?: Event): void;
    }
}
declare namespace $ {
    class $mpk_tss_reports_details_card extends $mpk_tss_reports_status_card {
        carriage(): any;
        arg(): {
            "carriage": string;
        };
        carriage_id(): string;
        title_prefix(): string;
        status(): string;
        violation_status(): string;
        Status_text(): $mpk_tss_reports_status;
        violation_status_total(): string;
        Status_icon(): $mpk_tss_icon_download;
        status_click(event?: any, force?: $mol_atom_force): any;
        carriage_status_click(event?: any, force?: $mol_atom_force): any;
        items(): any[];
        Place(): $mol_labeler;
        place_title(): string;
        place(): string;
        Carriage_number(): $mol_labeler;
        carriage_number_title(): string;
        carriage_number(): string;
        Load_type(): $mol_labeler;
        load_type_title(): string;
        load_type(): string;
        Measured_speed(): $mol_labeler;
        measured_speed_title(): string;
        measured_speed(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_details_card extends $.$mpk_tss_reports_details_card {
        carriage(): $mpk_tss_reports_domain_carriage;
        title(): string;
        carriage_id(): string;
        place(): string;
        carriage_number(): string;
        violation_status(): $mpk_tss_reports_domain_violation_status;
        load_type(): $mpk_tss_reports_domain_load_type;
        measured_speed(): string;
        violation_type(): $mpk_tss_reports_domain_violation_type;
        violation_status_total(): string;
    }
}
declare namespace $ {
    class $mpk_tss_reports_details extends $mol_view {
        report(): any;
        title_prefix(): string;
        pages(): any[];
        Main(): $mol_page;
        Details_close(): $mol_link;
        Details_close_icon(): $mol_icon_cross;
        Carriages(): $mol_list;
        carriage_links(): any[];
        Carriage_link(id: any): $mpk_tss_reports_details_card;
        carriage(id: any): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports_details extends $.$mpk_tss_reports_details {
        report(): $mpk_tss_reports_domain_report;
        title(): string;
        carriage(id: string): $mpk_tss_reports_domain_carriage;
        carriage_links(): $.$mpk_tss_reports_details_card[];
        carriage_current_id(next?: string): any;
        Carriage_details(): void;
    }
}
declare namespace $ {
    function $mol_range2<Item = number>(item?: (index: number) => Item, size?: () => number): Item[];
    class $mol_range2_array<Item> extends Array<Item> {
        concat(...tail: this[]): Item[];
        filter<Context>(check: (val: Item, index: number, list: Item[]) => boolean, context?: Context): Item[];
        forEach<Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => void, context?: Context): void;
        map<Item_out, Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => Item_out, context?: Context): Item_out[];
        reduce<Result>(merge: (result: Result, val: Item, index: number, list: Item[]) => Result, result?: Result): Result;
        slice(from?: number, to?: number): Item[];
        some<Context>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
        every<Context = null>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
    }
}
declare namespace $ {
    class $mpk_tss_reports_domain_mock extends $mpk_tss_reports_domain {
        max_reports(): number;
        report(id: string): $mpk_tss_reports_domain_report;
        reports(): $mpk_tss_reports_domain_report[];
    }
}
declare namespace $ {
    class $mpk_tss_reports extends $mol_view {
        title(): string;
        pages(): any[];
        Main(): $mpk_tss_reports_page;
        event_top(e?: any, force?: $mol_atom_force): any;
        tools(): any[];
        filter_value(val?: any, force?: $mol_atom_force): any;
        clear_url(): any;
        Reports(): $mol_list;
        report_links(): any[];
        Details_pages(): any;
        Report_link(id: any): $mpk_tss_reports_card;
        report(id: any): any;
        shaded(id: any): boolean;
        Report_details(id: any): $mpk_tss_reports_details;
    }
}
declare namespace $ {
    class $mpk_tss_reports_page extends $mol_page {
        minimal_width(): number;
        sub(): any[];
        Filter_value(): $mol_search;
        filter_value(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mpk_tss_reports extends $.$mpk_tss_reports {
        domain(): $mpk_tss_reports_domain_mock;
        main_blended(): boolean;
        report_links(): $.$mpk_tss_reports_card[];
        report(id: string): $mpk_tss_reports_domain_report;
        report_current_id(next?: string): any;
        shaded(id: string): boolean;
        Details_pages(): any[];
        clear_url(): void;
        destructor(): void;
    }
}
declare namespace $ {
    class $mpk_tss_icon_signout extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            "src": string;
            "alt": string;
        };
        uri(): string;
    }
}
declare namespace $ {
    class $mol_form extends $mol_view {
        submit_blocked(): boolean;
        sub(): any[];
        Bar_fields(): $mol_view;
        form_fields(): any[];
        Bar_buttons(): $mol_row;
        buttons(): any[];
    }
}
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
    }
}
declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        label(): any[];
        name(): string;
        Bid(): $mol_view;
        bid(): string;
        Content(): any;
        control(): any;
    }
}
declare namespace $ {
    class $mpk_tss_enter extends $mol_list {
        entered(val?: any, force?: $mol_atom_force): any;
        minimal_width(): number;
        sub(): any[];
        Form(): $mol_form;
        loginField(): $mol_form_field;
        loginLabel(): string;
        loginControl(): $mol_string;
        login(val?: any, force?: $mol_atom_force): any;
        passwordField(): $mol_form_field;
        passwordLabel(): string;
        passControl(): $mol_string;
        password(val?: any, force?: $mol_atom_force): any;
        submit(): $mol_button_major;
        submitLabel(): string;
        event_submit(val?: any, force?: $mol_atom_force): any;
        submit_blocked(): boolean;
    }
}
declare namespace $.$$ {
    class $mpk_tss_enter extends $.$mpk_tss_enter {
        event_submit(): void;
    }
}
declare namespace $ {
    class $mpk_tss extends $mol_view {
        attr(): {
            "mol_theme": string;
        };
        theme(): string;
        sub(): any[];
        Head(): $mol_view;
        Terminal_link(): $mol_button_minor;
        terminal_label(): string;
        Body(): $mpk_tss_main;
    }
}
declare namespace $ {
    class $mpk_tss_main extends $mol_book {
        Menu_item(id: any): $mol_link;
        menu_page_arg(id: any): {};
        menu_page_title(id: any): string;
        menu_pages(): {
            "software": $mpk_tss_software;
            "pereferial": $mpk_tss_pereferial;
            "sensors": $mpk_tss_sensors;
            "reports": $mpk_tss_reports;
        };
        Software(): $mpk_tss_software;
        Pereferial(): $mpk_tss_pereferial;
        Sensors(): $mpk_tss_sensors;
        Reports(): $mpk_tss_reports;
        common_tools(): any[];
        Details_close(): $mol_link;
        Details_close_icon(): $mol_icon_cross;
        User_link(): $mol_button_minor;
        logout_click(event?: any, force?: $mol_atom_force): any;
        User_email(): $mol_view;
        User_signout(): $mpk_tss_icon_signout;
        pages(): any[];
        Sidebar(): $mol_page;
        Logo(): $mol_image;
        event_top(val?: any, force?: $mol_atom_force): any;
        sidebar_items(): any[];
        Enter(): $mpk_tss_enter;
        entered(val?: any, force?: $mol_atom_force): any;
        logged_email(v?: any, force?: $mol_atom_force): any;
        Menu(): $mol_list;
        menu_items(): any[];
        Foot_content(): $mol_row;
        Foot_text(): $mol_view;
        Summary(): $mpk_tss_summary;
        details(): any;
        Placeholder(): $mpk_tss_placeholder;
    }
}
declare namespace $ {
    class $mpk_tss_placeholder extends $mol_page {
        attr(): {
            "tabindex": any;
        };
        title(): string;
        tools(): any[];
        body(): any[];
        Image(): $mol_image;
    }
}
declare namespace $.$$ {
    class $mpk_tss extends $.$mpk_tss {
    }
    class $mpk_tss_main extends $.$mpk_tss_main {
        entered(next?: boolean): boolean;
        logout_click(): void;
        menu_items(): $.$mol_link[];
        menu_page_arg(id: string): {
            page: string;
        };
        menu_page_title(id: string): any;
        page_id(): any;
        sidebar_items(): $.$mol_list[];
        pages(): any[];
    }
}
declare namespace $ {
    class $mol_section extends $mol_list {
        rows(): any[];
        Head(): $mol_view;
        head(): any;
        Content(): any;
    }
}
declare namespace $ {
    class $mpk_tss_summary_section extends $mol_section {
    }
}
declare namespace $ {
    class $mpk_tss_summary_status extends $mol_view {
        title(): string;
        statuses(): {
            "warning": string;
            "error": string;
            "success": string;
            "ready": string;
        };
        warning(): string;
        error(): string;
        success(): string;
        ready(): string;
        sub(): any[];
        attr(): {
            "mpk_tss_summary_status_type": string;
        };
        type(): string;
    }
}
declare namespace $.$$ {
    class $mpk_tss_summary_status extends $.$mpk_tss_summary_status {
        title(): string;
    }
}
declare namespace $ {
    class $mol_float extends $mol_view {
    }
}
declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        checked(val?: any, force?: $mol_atom_force): any;
        sub(): any[];
        Icon(): any;
        label(): any[];
        Title(): $mol_view;
        title(): string;
    }
}
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
    }
}
declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}
declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            "paddingLeft": string;
        };
        level_style(): string;
        checked(val?: any, force?: $mol_atom_force): any;
        expanded(val?: any, force?: $mol_atom_force): any;
        enabled(): boolean;
        expandable(): boolean;
    }
}
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}
declare namespace $ {
    class $mol_grid extends $mol_scroll {
        row_ids(): any[];
        row_id(index: any): any;
        col_ids(): any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        sub(): any[];
        Table(): $mol_grid_table;
        gap_top(): number;
        rows_visible(): any[];
        rows(): any[];
        Head(): $mol_grid_row;
        row_height(): number;
        head_cells(): any[];
        Row(id: any): $mol_grid_row;
        cells(id: any): any[];
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        cell_content_text(id: any): any[];
        cell_content(id: any): any[];
        Cell_number(id: any): $mol_grid_number;
        cell_content_number(id: any): any[];
        Col_head(id: any): $mol_float;
        col_head_content(id: any): any[];
        Cell_branch(id: any): $mol_check_expand;
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any, force?: $mol_atom_force): any;
        Cell_content(id: any): any[];
        Cell_dimmer(id: any): $mol_dimmer;
        needle(): string;
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_view {
        dom_name(): string;
        style(): {
            "top": number;
        };
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_gap extends $mol_view {
        style(): {
            "top": number;
        };
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        style(): {
            "height": number;
        };
        height(): number;
        sub(): any[];
        cells(): any[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_grid_number extends $mol_grid_cell {
    }
}
declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        rows_visible(): any[];
        rows_visible_max(): number;
        view_window(): {
            top: number;
            bottom: number;
            count: number;
        };
        gap_top(): number;
        height(): number;
        content_height(): number;
        head_cells(): $mol_float[];
        col_head_content(colId: string): string[];
        rows(): $mol_grid_row[];
        cells(row_id: string[]): $mol_view[];
        col_type(col_id: string): "text" | "number" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): string[][];
        row_expanded(row_id: string[], next?: boolean): boolean;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
    class $mol_grid_table extends $.$mol_grid_table {
        context_sub(): $mol_ambient_context;
    }
}
declare namespace $ {
    interface $mol_syntax_token {
        name: string;
        found: string;
        chunks: string[];
    }
    class $mol_syntax {
        constructor(lexems: {
            [name: string]: RegExp;
        });
        'lexems()': {
            [name: string]: RegExp;
        };
        lexems(): {
            [name: string]: RegExp;
        };
        'rules()': {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        rules(): {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        'regExp()': RegExp;
        regExp(): RegExp;
        tokenize(text: string): $mol_syntax_token[];
    }
}
declare namespace $ {
    var $mol_syntax_md_flow: $mol_syntax;
    var $mol_syntax_md_line: $mol_syntax;
    const $mol_syntax_md_code: $mol_syntax;
}
declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        tokens(): any[];
        Quote(id: any): $mol_text;
        quote_text(id: any): string;
        Row(id: any): $mol_text_row;
        block_content(id: any): any[];
        block_type(id: any): string;
        Span(id: any): $mol_text_span;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        header_level(id: any): number;
        header_content(id: any): any[];
        Table(id: any): $mol_grid;
        table_head_cells(id: any): any[];
        table_rows(id: any): any[];
        Table_row(id: any): $mol_grid_row;
        table_cells(id: any): any[];
        Table_cell(id: any): $mol_grid_cell;
        table_cell_content(id: any): any[];
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        minimal_height(): number;
        attr(): {
            "mol_text_type": string;
        };
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
        attr(): {
            "mol_text_header_level": any;
        };
        level(val?: any, force?: $mol_atom_force): any;
        sub(): any[];
        content(): any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        dom_name(): string;
        attr(): {
            "mol_text_type": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        sub(): any;
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_view {
        dom_name(): string;
        attr(): {
            "mol_text_type": any;
            "href": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        sub(): any;
        content(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            "allowfullscreen": boolean;
            "mol_text_type": any;
            "data": any;
        };
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        sub(): any[];
        title(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): $mol_syntax_token[];
        rows(): ($.$mol_grid | $.$mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        code2spans(prefix: string, text: string): $mol_text_span[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}
declare namespace $ {
    class $mol_expander extends $mol_list {
        rows(): any[];
        Label(): $mol_view;
        Trigger(): $mol_check_expand;
        expanded(val?: any, force?: $mol_atom_force): any;
        label(): any[];
        tools(): any[];
        Content(): $mol_view;
        content(): any[];
    }
}
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
    }
}
declare namespace $ {
    class $mpk_tss_summary extends $mol_page {
        title(): string;
        minimal_width(): number;
        body(): any[];
        Statuses(): $mpk_tss_summary_section;
        All(): $mpk_tss_summary_status;
        Software(): $mpk_tss_summary_item;
        Sensors(): $mpk_tss_summary_item;
        Pereferials(): $mpk_tss_summary_item;
        Log(): $mol_expander;
        log_title(): string;
    }
}
declare namespace $ {
    class $mpk_tss_summary_item extends $mol_link {
        type(): string;
        sub(): any[];
        Title(): $mol_view;
        Status(): $mpk_tss_summary_status;
    }
}
