import React, { useContext } from 'react';
import { FilterContext } from '../../../context/FilterContext';
import { Calendar, LayoutGrid } from 'lucide-react';
import './Headerfilters.css';

function Headerfilters() {
  const { activeFilter, setActiveFilter } = useContext(FilterContext);

  const filters = [
    { label: 'All', dotClass: null },
    { label: 'Initiated', dotClass: 'Dot_Purple_HeaderFilter_COMP' },
    { label: 'Deployed', dotClass: 'Dot_Green_HeaderFilter_COMP' },
    { label: 'QA Testing', dotClass: 'Dot_Orange_HeaderFilter_COMP' },
    { label: 'In Development', dotClass: 'Dot_Blue_HeaderFilter_COMP' },
    { label: 'Maintenance', dotClass: 'Dot_White_HeaderFilter_COMP' },
  ];

  return (
    <div className='Main_Container_HeaderFilter_COMP'>
      <div className='Content_Wrapper_HeaderFilter_COMP'>
        <div className='Filter_Group_HeaderFilter_COMP'>
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={
                activeFilter === filter.label
                  ? 'Filter_Item_Active_HeaderFilter_COMP'
                  : 'Filter_Item_HeaderFilter_COMP'
              }
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.dotClass && (
                <span className={filter.dotClass} />
              )}
              {filter.label}
            </button>
          ))}
        </div>
        <div className='Actions_Group_HeaderFilter_COMP'>
          <Calendar className='Action_Icon_HeaderFilter_COMP' />
          <LayoutGrid className='Action_Icon_HeaderFilter_COMP' />
        </div>
      </div>
    </div>
  );
}

export default Headerfilters;