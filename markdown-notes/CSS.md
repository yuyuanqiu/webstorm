## 布局
### flex布局
- 总结：需要为所有的容器显示说明为flex布局，不然其内部子元素不能使用flex相关的属性，使用`display: flex`声明的盒子为`容器`，容器内部的子元素为`项目`。
- **容器属性**
    ```CSS
    /* flex-direction：项目（主轴）的排序方向 */
    /* 分别为行（左到右），右到左，列（上到下），下到上 */
    .box {
        flex-direction: [row | row-reverse | column | column-reverse];
    }
    /* flex-wrap：项目的换行方向 */
    .box {
        /* 不换行，换行，在上方换行（后来的在原来的上面） */
        flex-wrap: [nowrap | wrap | wrap-reverse];
    }
    /* flex-flow：flex-direction flex-wrap; */

    /* justify-content：项目在主轴的对齐方式 */
    .box {
        /* 主轴起点对齐/终点对齐/居中对齐/两端对齐（项目间隔相等，首尾无间隔）/每个项目两侧间隔相等，故两项目间隔是首尾间隔的两倍 */
        justify-content: [flex-start | flex-end | center | space-between | space-around];
    }

    /* align-items：项目在交叉轴的对齐方式 */
    .box {
        /* 交叉轴起点对齐/终点对齐/居中/基线对齐/默认（填充容器的高/宽） */
        align-items: [flex-start | flex-end | center | baseline | stretch];
    }

    /* align-content：多根交叉轴的对齐方式 */
    .box {
        /* 交叉轴起点对齐/终点对齐/居中对齐/两端对齐（轴线之间间隔平均分布/每根轴线两侧间隔相等，故两轴线间隔比首尾大2倍/默认（占满每个交叉轴的整个宽/高）  */
        align-content: [flex-start | flex-end | center | space-between | space-around | stretch];
    }
    ```

- **项目属性**
    ```
    /* order：项目的排列顺序，值越大排列越后 */
    .box {
        order: 0;   /* 默认为0，可为负数 */
    }

    /* flex-grow：项目的放大比例，默认为0，即使有剩余空间也不放大，按原大小排列 */
    .box {
        flex-grow: 1;   /* 可等分剩余空间 */
    }

    /* flex-shrink：项目的缩小比例，默认为1，项目空间不够时将缩小 */
    .box {
        flex-shrink: 0;     /* 当为0时，空间不足将不缩小，负值无效 */
    }

    /* flex-basis：分配多余空间时，项目占据的主轴空间大小 */
    .box {
        flex-basis: auto;   /* 项目原大小 */
    }

    /* flex: flex-grow [flex-shrink flex-basis]; */ 

    /* align-self：单个项目的对齐方式，可覆盖align-items属性，auto表继承父元素 */
    .box {
        align-self: [auto | flex-start | flex-end | center | baseline | stretch];
    }
    ```