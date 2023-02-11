import React, { useState, useMemo } from 'react';
import './assets/styles.css'
import './App.css';
import Header from './Header';
import Divider from "@material-ui/core/Divider";
import Select from '@mui/material/Select';
import Table from './components/ReactTable';
import { Chip } from '@mui/material';
import { MenuItem } from '@material-ui/core';
import FilterBadges from './components/FilterBadges';
import HeaderNew from './components/HeaderNew';
import About from './components/Aboutus';
import Contact from './components/Contactus';

let colorGrading = [];
function Home() {

  const [data, setData] = React.useState(null);
  const [value, setValue] = useState('')
  const [active, setActive] = useState([])
  const [active1, setActive1] = useState([])
  const [testorganismactive, settestorganismactive] = useState([])
  const [sourceactive, setsourceactive] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const Dropdown = ({ options }) => {
    return (
      <Select
        value={value}
        onChange={handleChange}
        sx={{ minWidth: 200 }}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >

        {options.map((option) => (
          <MenuItem value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    )
  }


  React.useEffect(() => {
    fetch("https://long-back.onrender.com/")
      // fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.filter(value => JSON.stringify(value) !== '{}'))
      });
  }, []);

  // console.log(data, "long data")



  const tabledata = useMemo(
    () => [
      {
        Header: "SUPPLEMENT",
        accessor: "name",
        width: 120,
      },
      {
        Header: "OTHER NAMES",
        accessor: "othername"
      },
      {
        Header: "EVIDENCE FOR ANTI-AGEING",
        accessor: "level",
        Cell: ({ cell: { value } }) => <label className=' space-x-1 space-y-1'><Levels values={value} /></label>

      },
      {
        Header: "ALSO GOOD FOR",
        accessor: "alsogoodfor",
        width: 350,
        Cell: ({ cell: { value } }) => <label className=' space-x-1 space-y-1'><Genres values={value} color='primary' /></label>

      },
      {
        Header: "ADMINISTRATION",
        accessor: "administration",
        Cell: ({ cell: { value } }) => <label className=' space-x-1 space-y-1'><Genres values={value} color='secondary' /></label>
      },

      {
        Header: "TEST ORGANISMS",
        accessor: "testorganism",
        Cell: ({ cell: { value } }) => <label className=' space-x-1 space-y-1'><Genres values={value} color='success' /></label>
      },

      {
        Header: "COMPOUND SOURCES",
        accessor: "compoundsource",
        Cell: ({ cell: { value } }) => <label className=' space-x-1 space-y-1'><Genres values={value} color='warning' /></label>
      },
    ],
    []
  );

  const Genres = ({ values, color }) => {
    console.log("called");
    colorGrading.push(...values);
    return (
      <>
        {
          values.map((genre, idx) => {
            return (
              <Chip label={genre} size="small" color={color} variant="outlined" key={idx} />
            );
          })}
      </>
    )
  };
  const filterDuplicate = colorGrading.filter((item,
    index) => colorGrading.indexOf(item) === index);
  console.log(filterDuplicate, 'ColorGrading')

  const Levels = ({ values }, idx) => {
    return (
      <>
        <Chip label={values} size="small" color="primary" variant="" key={idx} />
      </>
    );
  }
  const antiAgeing = ['High', 'Medium', 'Low'],
    administration = ['Oral', 'Inhalation', 'Topical', 'Rectal', 'Subcutaneoes Implant', 'IV'],
    testOrganism = ['Human', 'Primate', 'Mammal', 'Human Cell Line', 'Vertebrae', 'Other'],
    compoundSource = ['Natural', 'Synthetically produced', 'Synthetically designed']

  return (
    <React.Fragment>
      {/* <Header /> */}
      {/* <HeaderNew /> */}
      <section className='lg:mx-auto md:mx-5 max-w-[88rem] mt-10 overflow-hidden'>

        <div className='center-component mb-8'>
          <div className='column w-1/4'>
            <FilterBadges
              data={antiAgeing}
              align={'flex-start'}
              label={'Level of evidence for anti-ageing property'}
              filterState={active1}
              setFilterState={setActive1}
            />
          </div>
          <div className='column w-1/3 text-center'>
            <FilterBadges
              data={administration}
              align={'center'}
              label={'Administration'}
              filterState={active}
              setFilterState={setActive}
            />
          </div>

          <div className='column w-1/4'>
            <FilterBadges
              data={testOrganism}
              align={'flex-start'}
              label={'Test Organism'}
              filterState={testorganismactive}
              setFilterState={settestorganismactive}
            />
          </div>

        </div>

        <div className='center-component'>

          <div className='column'>
            <p className='text-md font-semibold font-gordita mb-4'>Also good for</p>
            <Dropdown
              options={[
                { value: '', label: '--Choose an option--', disabled: true },
                { label: 'Blood Clot', value: 'Blood Clot' },
                { label: 'Inflammation', value: 'Inflammation' },
                { label: 'Cancer', value: 'Cancer' },

              ]}
            />
          </div>

          <div className='column text-center'>
            <FilterBadges
              data={compoundSource}
              align={'center'}
              label={'Compound Source'}
              filterState={sourceactive}
              setFilterState={setsourceactive}
            />
          </div>
        </div>
        <br />
        <Divider />

        <div className='tableWrap'>
          <br /> <br />
          {data && <Table columns={tabledata} data={data} value={value} active={active} active1={active1} testorganismactive={testorganismactive} sourceactive={sourceactive} />
          }
        </div>
      </section>


    </React.Fragment>

  );
}

function HomePage() {
  if (window.location.pathname === "/") {
    return <Home />
  }
}
function Aboutus() {
  if (window.location.pathname === "/aboutus") {
    return <About />
  }
}
function Contactus() {
  if (window.location.pathname === "/contact") {
    return <Contact />
  }
}

export default function App() {
  return (
    <React.Fragment>
      <HeaderNew />
      {HomePage()}
      {Aboutus()}
      {Contactus()}
    </React.Fragment>
  )
}