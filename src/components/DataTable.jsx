import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

const subColumns = {
  dateAndLeaguge: 'temp',
  yorumlar: 'Yorumlar',
  macsonucu: '',
  home: '1',
  x: 'x',
  away: '2',
  alt: 'Alt',
  üst: 'Üst',
  hone: 'H1',
  secondone: '1',
  secondx: 'X',
  secondtwo: '2',
  htwo: 'H2',
  onex: '1-X',
  onetwo: '1-2',
  twox: '2-X',
  var: 'Var',
  yok: 'Yok',
  plusnumber: '+99',
};

const DataTable = () => {
  const { tickets, loader, error, cartItems, setCartItems, setIsClicked } =
    useContext(DataContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    const tempList = [];
    tickets.forEach((ticket) => {
      tempList.push({
        ...subColumns,
        dateAndLeaguge: `${ticket.D} ${ticket.DAY} ${ticket.LN}`,
      });
      tempList.push(ticket);
    });
    setList(tempList);
  }, [tickets.length]);

  const handleCellClick = (object) => {
    const isSelected = cartItems.some((o) => o.id === object.id);
    const existingIndex = cartItems.findIndex(
      (obj) => obj.rowId === object.rowId,
    );
    if (isSelected) {
      // Remove the object from the selectedObjects state
      setCartItems((prevSelected) =>
        prevSelected.filter((o) => o.id !== object.id),
      );
      setIsClicked(false);
    } else if (existingIndex !== -1) {
      const newItemsArray = [...cartItems];
      newItemsArray[existingIndex] = object;
      setCartItems(newItemsArray);
    } else {
      // Add the object to the selectedObjects state
      setCartItems((prevSelected) => [...prevSelected, object]);
      setIsClicked(true);
    }
  };

  if (loader) return <h1>Loading...</h1>;
  if (error) return <h3>Error Message : {Error}</h3>;

  const getStyle = (cellId) => {
    return {
      backgroundColor: cartItems.some((o) => o.id === cellId)
        ? 'yellow'
        : 'white',
    };
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <AutoSizer>
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={40}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            rowStyle={{
              alignItems: 'stretch',
            }}
            className='tableWrapper'
          >
            <Column
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              width={300}
              label={`EVENT COUNTS ${tickets.length}`}
              dataKey='dateAndLeaguge'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>
                      {rowData.dateAndLeaguge}
                    </div>
                  );
                }

                return (
                  <div
                    className='custom-cell'
                    onClick={() => {
                      handleCellClick({
                        id: `${rowData.C}${rowData.OCG[1].OC[0].O}`,
                        itemValue: rowData.OCG[1].OC[0].O,
                        rowId: rowData.index,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.C} {rowData.T} {rowData.N}
                  </div>
                );
              }}
            />
            <Column
              width={120}
              style={{ display: 'flex', alignItems: 'center' }}
              label='Yorumlar'
              dataKey='yorumlar'
              cellRenderer={(props) => {
                const isSubHeader = props.rowIndex % 2 === 0;
                if (isSubHeader) {
                  return <div className='custom-cell subheader'>Yorumlar</div>;
                }
                return <div className='custom-cell'>Yorumlar</div>;
              }}
            />
            <Column
              width={20}
              style={{ display: 'flex', alignItems: 'center' }}
              label=''
              dataKey='macsonucu'
              cellRenderer={(props) => {
                const rowData = props.rowData;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return <div className='custom-cell subheader'>&nbsp;</div>;
                }

                return <div className='custom-cell'>{rowData.OCG[1].MBS}</div>;
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='1'
              dataKey='home'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return <div className='subheader'>{rowData.home}</div>;
                }

                const cellId = `${rowData.NID}-1-0`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[1].OC[0].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[1].OC[0].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='X'
              dataKey='x'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.x}</div>
                  );
                }

                const cellId = `${rowData.NID}-1-1`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[1].OC[1].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[1].OC[1].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='2'
              dataKey='away'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.away}</div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='Alt'
              dataKey='alt'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.alt}</div>
                  );
                }

                const cellId = `${rowData.NID}-1-2`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[5].OC[25].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[5].OC[25].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='Üst'
              dataKey='üst'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.üst}</div>
                  );
                }

                const cellId = `${rowData.NID}-1-3`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[5].OC[26].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[5].OC[26].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='H1'
              dataKey='hone'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.hone}</div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='H1'
              dataKey='secondone'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>
                      {rowData.secondone}
                    </div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='X'
              dataKey='secondx'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>
                      {rowData.secondx}
                    </div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='2'
              dataKey='secondtwo'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>
                      {rowData.secondtwo}
                    </div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='H2'
              dataKey='htwo'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.htwo}</div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='1-X'
              dataKey='onex'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.onex}</div>
                  );
                }

                const cellId = `${rowData.NID}-1-4`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[2].OC[3].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[2].OC[3].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='1-2'
              dataKey='onetwo'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>
                      {rowData.onetwo}
                    </div>
                  );
                }

                const cellId = `${rowData.NID}-1-5`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[2].OC[4].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[2].OC[4].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='2-X'
              dataKey='twox'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.twox}</div>
                  );
                }

                const cellId = `${rowData.NID}-1-6`;
                const rowId = `${rowData.NID}`;
                return (
                  <div
                    className='custom-cell'
                    style={getStyle(cellId)}
                    onClick={() => {
                      handleCellClick({
                        id: cellId,
                        itemValue: rowData.OCG[2].OC[4].O,
                        rowId: rowId,
                        parentObject: rowData,
                      });
                    }}
                  >
                    {rowData.OCG[2].OC[5].O}
                  </div>
                );
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='Var'
              dataKey='var'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.var}</div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='Yok'
              dataKey='yok'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>{rowData.yok}</div>
                  );
                }
              }}
            />
            <Column
              width={60}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              label='+99'
              dataKey='plusnumber'
              cellRenderer={(props) => {
                const { rowData } = props;
                const isSubHeader = props.rowIndex % 2 === 0;

                if (isSubHeader) {
                  return (
                    <div className='custom-cell subheader'>
                      {rowData.plusnumber}
                    </div>
                  );
                }
                return <div className='custom-cell'>3</div>;
              }}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default DataTable;
