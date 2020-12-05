# Grid

https://material-ui.com/components/grid/

Material Designのレスポンシブ・レイアウト・グリッドは、画面サイズと向きに適応し、レイアウト間の一貫性を確保します。

グリッドは、レイアウト間に視覚的な一貫性を生み出し、多様なデザインに柔軟に対応できます。Material Design のレスポンシブ UI は、12 列のグリッド レイアウトに基づいています。

> Gridコンポーネントはデータグリッドと混同してはいけません。データグリッドについては、DataGridコンポーネントを参照してください。

<br>
<br>

## どのように動作するか？

グリッドシステムはGridコンポーネントで実装されています。

* CSSのFlexible Boxモジュールを使用しており、自由度の高いレイアウトが可能です。
* レイアウトにはコンテナとアイテムの2種類があります。
* アイテムの幅はパーセンテージで設定されているため、常に親要素との相対的な大きさを保ちます。
* アイテムには、個々のアイテム間の間隔を作るためのパディングがあります。
* グリッドのブレークポイントは、xs、sm、md、lg、xlの5つです。

> 初めての方やflexboxに慣れていない方は、このCSS-Trickksのflexboxガイドをお読みになることをお勧めします。

<br>
<br>

## Spacing

レスポンシブグリッドでは、カラムの幅ではなく、一貫した間隔の幅を重視しています。マテリアルデザインの余白と列は、8pxの正方形のベースライングリッドに従います。spacing プロパティは 0 から 10 までの整数です。デフォルトでは、2つのグリッド項目間の間隔は線形関数に従います：output(spacing) = spacing * 8px、例：spacing={2}は16pxの幅の隙間を作成します。

この出力変換関数は[テーマを使ってカスタマイズ](https://material-ui.com/customization/spacing/)することができます。

```tsx
export const SpacingGrid = () => {

    // いろいろ省略

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            <Paper/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
```

<br>
<br>

## Fluid grids

流体グリッドは、コンテンツを拡大縮小したり、サイズを変更したりするカラムを使用します。流体グリッドのレイアウトは、レイアウトを劇的に変更する必要があるかどうかを判断するために、ブレークポイントを使用することができます。

<br>
<br>

## Grid with brakpoints

一部の列では、複数の幅が定義されているため、定義されたブレークポイントでレイアウトが変更されることがあります。

### Basic grid

列幅はすべてのブレークポイント（すなわち xs と up）で適用されます。

```tsx
export const BasicGrid = () => {
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
        </Grid>
    </div>
  );
}
```

<br>
<br>

## Interactive

以下は、さまざまな設定の視覚的な結果を探索することができますインタラクティブなデモです。

```tsx
<Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
>
```

<br>
<br>

## Auto layout

自動レイアウトは、アイテムが利用可能なスペースを均等に共有するようにします。これはまた、あるアイテムの幅を設定することができ、他のアイテムは自動的にその周りにリサイズされることを意味します。

```tsx
export const AutoGrid = () => {
  return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
```

