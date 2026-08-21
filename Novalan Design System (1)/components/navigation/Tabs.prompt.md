Switches views inside a page. Labels uppercase; counts sit muted after the label.

```jsx
<Tabs items={[{value:"todo",label:"Todos",count:42},{value:"lino",label:"Lino"}]} value={t} onChange={setT} />
<Tabs variant="segmented" items={["Metros","Rollos"]} />
```