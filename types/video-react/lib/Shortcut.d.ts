import * as React from 'react';
import Player from './Player';

interface Shortcut {
    keyCode?: number;
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;

    handle(player: Player, actions: Actions): any;
}

interface ShortcutProps {
    clickable?: boolean;
    dblclickable?: boolean;
    shortcuts?: ReadonlyArray<Shortcut>;
}
