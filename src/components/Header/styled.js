import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  .line-top {
    width: 100%;
    height: 34px;
    background-color: #808080;
  }

  .grid-search {
    width: 100%;
    display: grid;
    grid-template-columns: 1.6fr 2.4fr;
  }

  .box-logo {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #d3d3d3;
    padding-right: 20px;

    #logo {
      height: 70px;
    }
  }

  .box-input-search-header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    background-color: #a9a9a9;

    .input-search {
      display: flex;
      align-items: center;
      background-color: #a9a9a9;
      width: 100%;

      form {
        width: 100%;
        max-width: 600px;
        display: grid;
        align-items: center;
        grid-template-columns: calc(100% - 50px) 50px;
      }

      #input-search {
        width: 100%;
        height: 50px;
        border-radius: 2px 0 0 2px;
        border: #ffca2f solid 1px;
        font-size: 18px;
        font-family: Roboto, sans-serif;
        color: #111;
        padding-left: 15px;

        ::-webkit-input-placeholder { color:#adadad }
      }

      #btn-search {
        width: 100%;
        height: 50px;
        border: none;
        display: flex;
        border-radius: 0 2px 2px 0;
        justify-content: center;
        align-items: center;
        background-color: #cf2834;
        cursor: pointer;
      }

      #icon-lupa {
        width: 34px;
        height: 34px;
      }
    }
  }

  @media (max-width: 800px) {
    .line-top {
      height: 28px;
    }

    .grid-search {
      grid-template-columns: 1fr;
    }

    .box-logo {
      height: 80px;
      justify-content: center;
      padding-right: 0px;
    }
    
    .box-input-search-header {
      .input-search {
        justify-content: center;

        #input-search {
          font-size: 16px;

          ::-webkit-input-placeholder { font-size: 15px }
        }
      }
    }
  }
`;
