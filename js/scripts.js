.element {
    // Three columns to start
    @include row - cols(3);

    // Five columns from medium breakpoint up
    @include media - breakpoint - up(md) {
        @include row - cols(5);
    }
    img {
        max - width: 100 % ;
        max - height: 100 % ;
    }

    .portrait {
        height: 80 px;
        width: 30 px;
    }

    .landscape {
        height: 30 px;
        width: 80 px;
    }

    .square {
        height: 75 px;
        width: 75 px;
    }